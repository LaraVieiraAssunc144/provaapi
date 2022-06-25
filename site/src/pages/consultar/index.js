import { consultarV } from "../../api/vilao";

import { useState,useEffect } from "react";

export default function Index(){
    const[viloes,setViloes]= useState([]);

    async function carregarViloes(){
        const a= await consultarV()
        setViloes(a) 
    }
useEffect(()=>{
    carregarViloes()
},[])
     
return(
    <main>
        <h1>Consultar</h1>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            Id
                        </th>
                        <th>
                            Nome do vilão
                        </th>
                        <th>
                            Maldades
                        </th>
                        <th>
                           Tem poder ? 
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {viloes.map(item=>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.nome}</td>
                        <td>{item.maladade}</td>
                        <td>{item.boolean ?'Sim' :'Não'}</td>
                    </tr>    
                    )}
                </tbody>
            </table>
            <a href='/'>Voltar</a>
        </div>

    </main>
)












}

