let locDev = Math.floor(Math.random() * 6)
// let locDev = 3
if (locDev === 0){
			++locDev
		}
let locTax = Math.floor(Math.random() * 6)
// let locTax = 4
if (locTax === 0){
			++locTax
			if (locTax === locDev){
				++locTax
			}
} else if (locTax === locDev){
		++locTax
		if (locTax === 6){
			locTax = locTax - 3
		}
}
let clicks = 3
Vue.component('but',{
	props: ['id', 'but'], 
	template: `<div class="gameCell" @click="game" :id="but.id"></div>`,
	methods: {
		game(){
			clicks = clicks - 1
			let clickInf = document.getElementById('score')
			clickInf.innerHTML = clicks
		 	let butNum = Number(this.but.id)
		 	let curtainCovering = document.getElementById('covering')
		 	let inscription = document.getElementById('inscriptionCover')
		 	let cellD = document.getElementById(locDev)
		 	let cellT = document.getElementById(locTax)
		 	if(butNum === locDev) {
				cellD.setAttribute('class', 'devFinded')
				this.setCelCur()
				inscription.innerHTML = "ура! программист найден!"
				setTimeout(() => {
					curtainCovering.setAttribute('class', 'gameFinishDev')
					this.butRelPage()
				},2500)
		 	} else if (butNum === locTax) {
				cellT.setAttribute('class', 'taxFinded')
				this.setCelCur()
				inscription.innerHTML = "упс, найден таксист!"
				setTimeout(() => {
					let cellD = document.getElementById(locDev)
					cellD.setAttribute('class', 'devFinded')
				},1500)
				setTimeout(() => {
					curtainCovering.setAttribute('class', 'gameFinishTax')
					this.butRelPage()
				},2500)
		 	} else if (clicks === 0 && butNum !== locDev && butNum !== locTax){
		 		cellD.setAttribute('class', 'devFinded')
		 		cellT.setAttribute('class', 'taxFinded')
		 		this.setCelCur()
				inscription.innerHTML = "программист не найден"
				setTimeout(() => {
					curtainCovering.setAttribute('class', 'gameOver')
					this.butRelPage()
				},2500)
		 	}
		},
		butRelPage(){
		 	let rel = document.getElementById('rel')
			let butReload = document.getElementById('reload')
			butReload.onclick = function(){
				location.href = location.href
			};
			butReload.setAttribute('class', 'reload')
			rel.setAttribute('class', 'fa fa-refresh')
		},
		setCelCur(){
			let curtainCovering = document.getElementById('covering')
		 	let inscription = document.getElementById('inscriptionCover')
			curtainCovering.setAttribute('class', 'curtainCovering')
			inscription.setAttribute('class', 'inscriptionCover')
		}
	}
})
let app = new Vue ({
	el: '#app',
	data: {
		clicks: 3,
		buts: [
			{id: 1},
			{id: 2},
			{id: 3},
			{id: 4},
			{id: 5},
		],
	},
})