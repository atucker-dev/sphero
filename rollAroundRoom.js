async function onCollision(){
	stopRoll();
	setMainLed({r:255,g:0,b:0});
	await Sound.Mechanical.Collision.play(true);
	await resetBolt();
}
registerEvent(EventType.onCollision, onCollision);

async function onGyroMax() {
    setMainLed({r:255,g:155,b:0});
	await Sound.Personality.Dizzy(true);
	await resetBolt();
}
registerEvent(EventType.onGyroMax, onGyroMax);


async function onFreefall() {
 	setMainLed({r:255,g:0,b:0});
	await Sound.Personality.Whee.play(true);
	await delay(0.5);
}
registerEvent(EventType.onFreefall, onFreefall);

async function onLanding() {
    setMainLed({r:0,g:0,b:255});
	await Sound.Personality.Celebrate.play(true);
	await resetBolt();
}
registerEvent(EventType.onLanding, onLanding);

async function onCharging() {
	stopRoll();
    setMainLed({r:255,g:255,b:0});
	await delay(300);
}
registerEvent(EventType.onCharging, onCharging);

async function resetBolt(){
	await delay(0.5);
	setMainLed({r:0,g:255,b:0});
	setHeading((getHeading()+getRandomInt(90,270)));
	setSpeed(75);
}
	
async function blink(){
    await Sound.Effects.Click.play(true);
    setMainLed({r:255,g:0,b:0});
    await delay(0.5);
    setMainLed({r:255,g:255,b:255});
}

async function startProgram() {
	setMainLed({r:0,g:0,b:255});
	await Sound.Game.OuterSpace.play(true);
	
	while(true){
		while(getLuminosity() > 5){
			setMainLed({r:0,g:255,b:0});
			await roll(getHeading(),100,3);
			if(getOrientation().pitch >= 35){
				resetBolt();
			}
		}
		await speak("too dark", true);
		await blink();
	}
}
