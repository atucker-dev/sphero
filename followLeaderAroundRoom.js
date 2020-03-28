async function onCollision(){
	stopRoll();
	setMainLed({r:255,g:0,b:0});
	await Sound.Mechanical.Collision.play(true);
}
registerEvent(EventType.onCollision, onCollision);

async function onGyroMax() {
    setMainLed({r:255,g:155,b:0});
	await Sound.Personality.Dizzy(true);
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
}
registerEvent(EventType.onLanding, onLanding);

async function onCharging() {
	stopRoll();
    setMainLed({r:255,g:255,b:0});
	await delay(300);
}
registerEvent(EventType.onCharging, onCharging);

async function startProgram() {
	setMainLed({r:0,g:0,b:255});
	await Sound.Game.OuterSpace.play(true);
	setMainLed({r:0,g:255,b:0});
	await startIRFollow(0,1);
	await delay(30);
	await speak("done following leader");
	stopIRFollow();
}
