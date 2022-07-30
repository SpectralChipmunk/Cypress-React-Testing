export const fakeAPIService = async (delay = 2000, callback = () => { }) => {
	const delayPromise = sec => new Promise(res => setTimeout(res, sec))
	await delayPromise(delay)
	callback()
}