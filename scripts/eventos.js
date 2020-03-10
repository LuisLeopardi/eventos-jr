const eventosJr = () => {

	const button = document.getElementById('back');

	let value = '';

	const first = document.getElementById('first');
	const people = document.getElementById('people');
	const paquetes = document.getElementById('paquetes');
	const final = document.getElementById('final');

	//---------------------------------------------------------------------------one

	const boda = document.getElementById('boda');
	const quinceañera = document.getElementById('quinceañera');
	const cumpleaños = document.getElementById('cumpleaños');
	const cita = document.getElementById('cita');
	const conferencia = document.getElementById('conferencia');

	const firstArray = [boda,quinceañera,cumpleaños,cita,conferencia];

	//---------------------------------------------------------------------------people

	const people200 = document.getElementById('people200');
	const people150 = document.getElementById('people150');
	const people100 = document.getElementById('people100');
	const people50 = document.getElementById('people50');
	const people25 = document.getElementById('people25');

	const peopleArray = [people200,people150,people100,people50,people25]

	//---------------------------------------------------------------------------paquetes
	const gold = document.getElementById('gold');
	const silver = document.getElementById('silver');
	const bronze = document.getElementById('bronze');

	const packageArray = [gold,silver,bronze];
	//---------------------------------------------------------------------------final
	const finalHeadline = document.getElementById('final-headline');
	const decorationList = document.getElementById('decoration-list');
	const foodList = document.getElementById('food-list');
	const personalList = document.getElementById('personal-list');
	//---------------------------------------------------------------------------functions

	const display = (packageName) => {

		paquetes.style.display = 'none';
		final.style.display = 'flex';

		finalHeadline.innerHTML = listado[packageName].title;

		personalList.innerHTML = '<h2> personal </h2>' + 
		listado[packageName].personal.map(item=>{
			return `<p> ${item} </p>`
		}).join('');

		foodList.innerHTML = '<h2> Comida </h2>' + 
		listado[packageName].comida.map(item=>{
			return `<p> ${item} </p>`
		}).join('');

		decorationList.innerHTML = '<h2> Decoración </h2>' + 
		listado[packageName].decoracion.map(item=>{
			return `<p> ${item} </p>`
		}).join('');
		
	}

	class ListFunction {
		constructor(variable){
			this.variable = variable;
		}

		event() {
			this.variable.addEventListener('click', ()=>{
				first.style.display = 'none';
				back.style.display = 'flex';
				people.style.display = 'flex';
				value = this.variable.id;

				peopleArray.forEach((element,i)=>{
					element.style.display = 'block';
					setTimeout(()=>{

					element.classList.remove('invisible')
					element.classList.add('animate')

					}, i*200)
				})

			})
		}

		secondEvent(){
			this.variable.addEventListener('click', ()=> {
				people.style.display = 'none';
				paquetes.style.display = 'flex';
				value += ' ' + this.variable.id;
			})
		}

		finalEvent(){
			this.variable.addEventListener('click', ()=> {
				paquetes.style.display = 'none';
				final.style.display = 'flex';
				value += ' ' + this.variable.id;
				display(value.replace(/\s+/g, ''));
			})
		}

	} 

	firstArray.forEach((element,i)=>{
		element.style.display = 'block';
		setTimeout(()=>{

			element.classList.remove('invisible')
			element.classList.add('animate')

		}, i*200)

		new ListFunction(window[element.id]).event();

	})

	peopleArray.forEach((element)=>{

		new ListFunction(window[element.id]).secondEvent();

	});

	packageArray.forEach((element)=>{

		new ListFunction(window[element.id]).finalEvent();

	});

	button.addEventListener('click', ()=>{
		first.style.display = 'flex';
		people.style.display = 'none';
		paquetes.style.display = 'none';
		final.style.display = 'none';
		back.style.display = 'none';
		value = '';
	})


}

const listado = {
	quinceañerapeople150gold: {
	title:'Paquete oro para quinceañera de 150 personas',
	decoracion : [
		'1 mesa principal decorada',
		'1 torta para fotos maqueta',
		'1 cofre de lujo para sobres',
		'3 copas decoradas para brindis',
		'1 numero 15 led en mesa',
		'2 ramos de flores led mesa',
		'1 fondo de mesa en telas',
		'1 cascada luminosa led',
		'150 vestidos blancos',
		'150 cintas segun color',
		'16 manteles',
		'15 centros de mesa cilindros',
		'1 araña en velos de colores',
		'1 bola de cristal',
		'silla de 15 decorada',
		'velero con velas',
		'15 gigante para fotos con luz led',
		'1 marco para tomar fotos',
		'1 libro de firmas',
		'luz led decoración salon',
		'luces, sonido y hora loca',
		'video vip proyector',
		'memoria de lo proyectado',
		'1 espacio para fotos',
		'foto entrada con marco',
		'50 fotos',
		'ramo',
		'150 sillas y 17 mesas',
		'entrada en antorchas'
	],

	comida : [
		'150 platos de comida buffet',
		'pasabocas 2 tandas',
		'150 porciones de torta',
		'150 copas de brindis',
		'150 cocteles de bienvenida',
		'gaseosa ilimitada'
		
	],

	personal : [
		'4 meseros',
		'maestro de ceremonia'
	]
		
	}
	
}

eventosJr();