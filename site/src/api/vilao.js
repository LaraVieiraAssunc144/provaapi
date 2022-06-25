import axios from "axios";
const api=axios.create({
    baseURL:'http://localhost:5000'
})

export async function cadastrarV(nome,maladade,suer_poder){
    const r= await api.post ('/vilao',{
        nome:nome,
        maladade:maladade,
        suer_poder:suer_poder
    })
    return r.data
}

export async function consultarV(){
    const resposta =await api.get ('/vilaozinho')
    return resposta.data
}


