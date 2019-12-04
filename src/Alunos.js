import React from 'react';
// import App from './App';


class Alunos extends React.Component{
    constructor(props) {
        super (props);

        this.state = {
            alunos: [
                {
                    nome: 'big cleiton',
                    idade: '19',
                    polo: 'alemao'
            
                },
                {
                    nome: 'big luan',
                    idade: '25',
                    polo: 'alemao'
            
                },
                {
                    nome: 'big jorge',
                    idade: '58',
                    polo: 'alemao'
            
                },
                {
                    nome: 'big maicon',
                    idade: '23',
                    polo: 'alemao'
            
                },
                {
                    nome: 'big arthur',
                    idade: '24',
                    polo: 'alemao'
            
                },
                {
                    nome: 'big lucas',
                    idade: '24',
                    polo: 'alemao'
            
                },
                {
                    nome: 'big dandara',
                    idade: '22',
                    polo: 'alemao'
            
                },
                {
                    nome: 'big douglas',
                    idade: '24',
                    polo: 'alemao'
            
                },
                {
                    nome: 'big cassio',
                    idade: '21',
                    polo: 'prazeres'
            
                },
                {
                    nome: 'big cicero',
                    idade: '24',
                    polo: 'prazeres'
            
                },
                {
                    nome: 'big geísa',
                    idade: '19',
                    polo: 'prazeres'
            
                },
                {
                    nome: 'big zaíra',
                    idade: '19',
                    polo: 'prazeres'
            
                },
                {
                    nome: 'big carol',
                    idade: '17',
                    polo: 'prazeres'
            
                },
                {
                    nome: 'big estefania',
                    idade: '18',
                    polo: 'prezeres'
            
                },
                {
                    nome: 'big rhuan',
                    idade: '20',
                    polo: 'prazeres'
            
                },
                {
                    nome: 'big rennan',
                    idade: '15',
                    polo: 'prazeres'
            
                } 
            ]
        }
    }


    ListAlunos= () =>{
        this.state.alunos.map(item => {
            console.log(item.name);
            retorn null;
        })
    }

    render () {
        return(
            <button onClick={this.ListAlunos}></button>
        )
    }
}

export default Alunos;