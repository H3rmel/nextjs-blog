---
title: "Overengineering: O mal dos devs"
date: "2023-05-02"
---

E aí, beleza?

Vim nesse post falar de algo que já fez muitos desenvolvedores de vítima (inclusive você pode ter sido uma delas), que é o assombroso já muito falado e discutido:

*Overengineering.*

Bem, essa palavra bonita vem do inglês, e em português ela basicamente significa o seguinte:

O ato do desenvolvedor ~~utilizar um canhão pra matar uma formiga~~ produzir uma solução muito mais complexa e avançada do que realmente necessário para a resolução de um problema.

Basicamente, sabe quando te dão aquela tarefa que parece simples, você vai lá, inicia ela e pensa: "Ok, umas 2 horas e um pouco mais de 60 linhas no VSCode e ta tudo resolvido.", porém tem um problema: 

Você acaba se entretendo com o problema que tem que resolver, e decide solucionar ele da forma mais bem pensada possível

Isso faz com que as 2 horas virem 3, 4 horas...Que as 60 linhas virem 150...E que do nada 1 ou 2 arquivos novos apareceram dentro do projeto

E no final de tudo, você resolveu o problema, porém:

Você tinha que ter mexido apenas no comportamento mobile de uma `<nav>` e alterado a cor de um botão em específico, mas ao invés disso você:

- Mexeu em toda a estrutura da `<nav>`, tanto no HTML, quanto no CSS e até no JS;
- Mexeu em todo o componente de botão apenas para adicionar essa variante deste botão em específico (que provavelmente nunca mais vai ser usado em outro lugar).

É, provavelmente você já passou por isso, e bem...

ISTO É *OVERENGINEERING*!

---

"Ta, show de bola, mas qual o problema?"

O problema do *overengineering* são vários, entre eles:

- Aumento do tempo e do custo de desenvolvimento: A produção de recursos e funcionalidades desnecessárias aumentam o tempo e custo do projeto;
- Possíveis atrasos: Por gastar tempo com oque não era necessário, atrasos no cronograma de entrega podem acontecer, ocorrendo também aumento do orçamento do projeto;
- Complexidade desnecessária: A solução se torna excessivamente complexa, oque pode dificultar na manutenção e escalabilidade do projeto.
- Dificuldade para compreender: Quando um pedaço de código é extremamente complexo, a maioria dos desenvolvedores provavelmente vai passar longe, já que é difícil de ler e entender oque esta acontecendo em determinado método, script e afins;
- Dificuldade no teste: Quanto mais complexo uma solução, mais difícil se torna testar e validar, portanto tem uma chance maior de surgirem aqueles *bugs* bem casca grossa que atrasam uma sprint inteira;
- Baixa aceitação do usuário: Dependendo da solução que foi desenvolvida, o usuário vai **odiar**, falando que X feature é confusa ou muito díficil de usar. (É aquilo, sempre faça as soluções pensando que uma criança de 5 anos vai utilizar, assim ela sempre é o mais simples possível)

"Ok, faz sentido, e como eu posso evitar?"

Então, eu não sou um especialista, mas oque me ajudou a evitar o *overengineering* até hoje foi os seguintes pontos:

- Boas práticas de desenvolvimento: Esse é sem dúvidas o ponto mais importante, quanto você mais seguir boas práticas como Clean Code, SOLID e etc. Mais difícil será de você criar um monstrinho de *overengineering*;
- Simplicidade é o objetivo: Sempre que for desenvolver alguma solução, tenha a simplicidade como um dos objetivos ao desenvolvê-las, isso vai ajudar muito a eliminar os recursos desnecessários;
- Use libs: Sempre que surgir algo um pouco mais difícil, do qual você até poderia fazer na unha e mostrar que manja, dê uma olhada se não existe aquele pacote NPM safado que já não faz isso com 5 linhas de código ou menos. Mas óbvio, tome cuidado para a sua `node_modules` não pesar GBs e GBs.
- Prototipagem: Essa é mais pra galera do front (inclusive eu), mas é basicamente isso, sempre possua protótipos que ajudem a validar as ideias e identificar os problemas, isso ajuda muito na hora de não realizar nada complexo demais e deixar uns usuários putos pelo caminho.

Mas bem, como ex-vítima/praticante de *overengineering*, essas são as dicas que posso dar para evitar realizar este ~~crime do desenvolvimento~~.

Até a próxima, flws!