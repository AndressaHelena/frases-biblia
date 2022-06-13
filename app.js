const text = document.getElementById("text");
const frases =
["A soberba precede a ruína, e a altivez do espírito precede a queda. <br> (Provérbios 16:18)",
"Uns se dizem ricos não tendo nada; Outros se dizem pobres tendo grandes riquezas. <br>(Provérbios 13:7)",
"Se te mostrares fraco no dia da angústia, é que a tua força é pequena. <br> (Provérbios 24:10)",
"A sabedoria do homem lhe dá paciência; sua glória é ignorar as ofensas. <br>  (Provérbios 19:11)",
"Não se emolde ao padrão deste mundo, mas transforme-se!<br>(Romanos 12:1)",
"Enquanto há vida, há esperança.<br>(Eclesiastes 9:4)",
"Tudo posso naquele que me fortalece. <br>(Filipenses 4:13)",
"Até aqui nos ajudou o Senhor!<br>(1 Samuel 7:12)",
"O mais importante para Deus é o que está no coração <br>(1 Samuel 16:7)",
"O que vem de Deus, traz paz.<br>(João 14:27)",
"O choro pode durar uma noite, mas a alegria vem pela manhã.<br>(Salmos 30:5)",
"Alegrem-se sempre no Senhor. Novamente direi: Alegrem-se!<br>(Filipenses 4:4)",
"O amigo ama em todos os momentos; é um irmão na adversidade. <br>(Provérbios 17:17)",
"Aproveitem ao máximo todas as oportunidades.<br>(Colossenses 4:5)",
"Espere no Senhor. Seja forte! Coragem! Espere no Senhor.<br>(Salmos 27:14)",
"Não tema, eu o ajudarei.<br> (Isaías 41:13)",
"Deus é o nosso refúgio e a nossa fortaleza, auxílio sempre presente na adversidade. <br>(Salmos 46:1)",
"Confie no Senhor de todo o seu coração <br>(Provérbios 3:5)",
"Lancem sobre ele toda a sua ansiedade, ele tem cuidado de vocês <br>(1 Pedro 5:7)",
"Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento.<br> (Provérbios 3:5)",
"Feliz será aquele que espera! <br>(Daniel 12:12) ",
"Eu o fortalecerei e o ajudarei; eu o segurarei com a minha mão direita vitoriosa. <br>(Isaías 41:10) ",
"Mas bendito é o homem cuja confiança está no Senhor. <br> (Jeremias 17:7)",
"Não ame o sono, senão você acabará ficando pobre. <br>(Provérbios 20:13)",
"O Senhor está com você, poderoso guerreiro.<br> (Juízes 6:12)",
"Aquele que anda com os sábios será cada vez mais sábio. <br>(Provérbios 13:20)",
"As más companhias corrompem os bons costumes. <br> (1 Coríntios 15:33)",
"Tudo o que fizerem, façam-no em nome do Senhor Jesus.<br> (Colossenses 3:17)",
"Pois vocês sabem que a prova da sua fé produz perseverança.<br> (Tiago 1:3)",
"Ensina-nos a contar os nossos dias para que o nosso coração alcance sabedoria.<br> (Salmos 90:12)",
"Estejam vigilantes, mantenham-se firmes na fé, sejam homens de coragem, sejam fortes. <br>(1 Coríntios 16:13)",
]
function mudarH1() {
    document.getElementById('title').innerHTML = "Reflita";
}

function mostraFrase(){
const totalFrases = frases.length
const numeroAleatorio = Math.floor(Math.random() * totalFrases)

mudarH1();
text.innerHTML = frases[numeroAleatorio]

}
