async function startProgram() {
	setMainLed({ r: 0, g: 0, b: 255 });
	await speak("Hello Square", true);
	await delay(1);
	while (true) {
		setMainLed({ r: 0, g: 255, b: 0 });
		await Sound.Game.Coin.play(true);
		await roll((getHeading() + 90), 50, 2);
		setMainLed({ r: 255, g: 0, b: 0 });
		await delay(1);
	}
}
