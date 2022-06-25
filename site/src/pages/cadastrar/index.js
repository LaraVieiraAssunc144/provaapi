import {cadastrarV} from "../../api/vilao.js";

import {useState} from 'react';

export default function Index(){
    const[vilao,setVilao]= useState('');
    const[maldade,setMaldade]=useState('');
    const[poder,setPoder]=useState(false);


    async function salvarClick(){
        try{
            const novoPedido=await cadastrarV(vilao,maldade,poder)
            setVilao(novoPedido);
            alert('Ok!')
        }
        catch(err){
            alert(err.message);
        }
    }
        return(
            <main className="aaaa">
                <h1>
                   Bem-Vindo 
                </h1>
                <p>
                    Cadastre o seu vilão
                </p>
                
                <input type='text' className='escreve' value={vilao} onChange={e => setVilao(e.target.value)} />
                <input type='text' className='escreve' value={maldade} onChange={e => setMaldade(e.target.value)} />
                <input type='checkbox' className='escreve' value={poder} onChange={e => setPoder(e.target.value)} />
                <div>
                    <button onClick={salvarClick}>Salvar</button>
                </div>
                <div>
                    <a href='/viloes'>
                        <button>Consultar vilões</button>
                    </a>
                </div>

            </main>
);

}