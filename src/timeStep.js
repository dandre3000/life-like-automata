import { update } from './update.js'
import { render } from './render.js'

import { TARGET_FRAME_RATE } from './main.js'

let accumulator = 0
let lastTime = 0
let req = 0
let running = false
let updating = false

// frame rate independent loop
const timeStep = (time) => {
	const UPDATE_INTERVAL = 1000 / TARGET_FRAME_RATE
	
	let frameTime = lastTime == 0? 0 : time - lastTime
	
	lastTime = time
	
	accumulator += frameTime
	
	if (accumulator > 1000) accumulator = 1000

	// while loop locked at an exact frame rate
	while (running && accumulator >= UPDATE_INTERVAL) {
		if (updating) update(UPDATE_INTERVAL)
		
		accumulator -= UPDATE_INTERVAL
	}
	
	render()
	
	if (running) {
		req = requestAnimationFrame(timeStep)
	} else {
		cancelAnimationFrame(req)
	}
}

export const start = () => {
	if (!running) {
		lastTime = window.performance.now()
		running = true
		req = requestAnimationFrame(timeStep)
	} else {
		throw new Error('timeStep is already running: cannot start another animation frame request')
	}
}

export const stop = () => {
	if (req === 0) {
		console.warn('No-op: timeStep is not running')
	} else {
		req = 0
		accumulator = 0
		running = false
	}
}

export const toggleUpdate = () => {
	return updating = updating? false : true
}