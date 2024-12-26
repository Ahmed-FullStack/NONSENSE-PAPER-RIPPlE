const paperRippleButtons = document.querySelectorAll('[data-paper-ripple]')
const paperRippleButton2 = document.querySelectorAll(
	'[data-paper-ripple-class]'
)

const arrayOfColors = [
	' rgb(154, 243, 127)',
	'rgb(243, 127, 191)',
	'	rgb(243, 189, 127)',
	'rgb(158, 127, 243)',
	'rgb(141, 243, 127)',
	'rgb(127, 229, 243)',
]

function mousePostionToCustomProps(e, el) {
	let posY = e.offsetY
	let posX = e.offsetX
	el.style.setProperty('--x', `${posX}px`)
	el.style.setProperty('--y', `${posY}px`)
}

function rippleAnimation(el, attribute) {
	el.setAttribute(attribute, '')
	el.addEventListener(
		'animationend',
		e => {
			el.removeAttribute(attribute)
		},
		{ once: true }
	)
}
function rippleAnimationWTRemoveAttribute(el, attribute) {
	el.setAttribute(attribute, '')
	el.addEventListener('keyup', e => {
		el.removeAttribute(attribute)
	})
}

paperRippleButtons.forEach(paperRippleButton => {
	paperRippleButton.addEventListener('mousedown', e => {
		mousePostionToCustomProps(e, paperRippleButton)
		rippleAnimation(paperRippleButton, 'data-ripple')
	})
	paperRippleButton.addEventListener('touchstart', e => {
		mousePostionToCustomProps(e, paperRippleButton)
		rippleAnimation(paperRippleButton, 'data-ripple')
	})

	paperRippleButton.addEventListener('keydown', e => {
		if (e.repeat) {
			e.preventDefault()
			switch (e.key) {
				case 'Enter':
				case ' ':
					rippleAnimationWTRemoveAttribute(
						paperRippleButton,
						'data-ripple-long-center'
					)
					break

				default:
					break
			}
		} else {
			switch (e.key) {
				case 'Enter':
				case ' ':
					rippleAnimation(paperRippleButton, 'data-ripple-center')
					break

				default:
					break
			}
		}
	})
})

class paperRipple {
	constructor(paperRippleElement) {
		this.paperRippleNode = paperRippleElement
	}

	#setCustomPropertiesToMousePosition(e, el) {
		let posY = e.offsetY
		let posX = e.offsetX
		el.style.setProperty('--x', `${posX}px`)
		el.style.setProperty('--y', `${posY}px`)
	}

	#paperRippleAnimate(el, attribute) {
		el.setAttribute(attribute, '')
		el.addEventListener(
			'animationend',
			e => {
				el.removeAttribute(attribute)
			},
			{ once: true }
		)
	}

	#paperRippleAnimateWTRemoveAttribute(el, attribute) {
		el.setAttribute(attribute, '')
		el.addEventListener('keyup', e => {
			el.removeAttribute(attribute)
		})
	}

	paperRipple() {
		this.paperRippleNode.addEventListener('mousedown', e => {
			this.#setCustomPropertiesToMousePosition(e, this.paperRippleNode)
			this.#paperRippleAnimate(this.paperRippleNode, 'data-ripple')
		})
		this.paperRippleNode.addEventListener('touchstart', e => {
			this.#setCustomPropertiesToMousePosition(e, this.paperRippleNode)
			this.#paperRippleAnimate(this.paperRippleNode, 'data-ripple')
		})

		this.paperRippleNode.addEventListener('keydown', e => {
			if (e.repeat) {
				e.preventDefault()
				switch (e.key) {
					case 'Enter':
					case ' ':
						this.#paperRippleAnimateWTRemoveAttribute(
							this.paperRippleNode,
							'data-ripple-long-center'
						)
						break
				}
			} else {
				switch (e.key) {
					case 'Enter':
					case ' ':
						this.#paperRippleAnimate(this.paperRippleNode, 'data-ripple-center')
						break
				}
			}
		})
	}
}

paperRippleButton2.forEach(paperRippleButton => {
	new paperRipple(paperRippleButton).paperRipple()
})
