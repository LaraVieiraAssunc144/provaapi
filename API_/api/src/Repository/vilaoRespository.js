import { con } from "./connection.js";


export async function CadastreVilao(vilao){
    const comando =
         `INSERT INTO tb_vilao (id_vilao, nm_vilao, nm_maladades, bt_suer_poder)
            VALUES (?, ?, ?, ? )`

                const [resposta] = await con.query(comando, [vilao.usuario, vilao.nome, vilao.maladade, vilao.suer_poder]);
                vilao.ID = resposta.insertID;

                return vilao;


}

export async function ConsultarVilao() {
    const comando =
   ` SELECT id_vilao	 
    id,
    nm_vilao        nome, 
    nm_maladades    maladade, 
    bt_suer_poder   boolean
    FROM tb_vilao  `
    
    const [linhas] = await con.query(comando);
    return linhas;
}

