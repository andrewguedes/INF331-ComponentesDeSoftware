# Lab02 - Data Flow & Mensagens

Andrew Guedes Siqueira
---

## Tarefa sobre catálogo de componentes

No diretório [s02catalog em santanche/component2learn](https://github.com/santanche/component2learn/blob/master/labs/02-data-flow_messages/notebooks/data-flow/s02catalog) está o notebook `components-01-catalog.ipynb` que apresenta o catálogo de componentes e o modo de conectá-los (visto pela perspectiva blackbox - externa) para montar uma composição. 

Ele apresenta seis tarefas que devem ser resolvidas. A entrega desse lab será formada pelo notebook `components-01-catalog.ipynb` com as seis tarefas resolvidas.

### Arquivo do Projeto

- [notebooks/data-flow/s02catalog/components-01-catalog.ipynb](notebooks/data-flow/s02catalog/components-01-catalog.ipynb)

---

## Tarefa Web Components 1

Crie quatro botões com rótulos `Mundo`, `Brasil P`, `Brasil E` e `Bahia` que, ao serem clicados, publiquem notícias nos seguintes tópicos (conteúdo a sua escolha):
* `noticia/mundo/politica`
* `noticia/brasil/politica`
* `noticia/brasil/esporte`
* `noticia/bahia/esporte`

O segundo nível do tópico indica a região da notícia e o terceiro o assunto. Associe a cada tópico o texto de uma mensagem de sua criação.

Crie três personagens (`doctor`, `nurse` e `patient`) usando o `<dcc-lively-talk>`. Cada um deles deve mostrar seletivamente (em seu balão) notícias publicadas pelos botões, conforme os seguintes critérios:
* `doctor` - mostra notícias sobre política (independentemente de região);
* `nurse` - mostra notícias cuja região é o Brasil (independentemente do assunto);
* `patient` - mostra todas as notícias.

### Composição de Componentes Web

_Para visualizar os componentes utilize o ambiente [DCC Playground](https://santanche.github.io/component2learn/labs/02-data-flow_messages/notebooks/messages/dccs/playground/)._

~~~html
<dcc-trigger label="Mundo"
             action="noticia/mundo/politica"
             value="worst global strategy against covid-19, Brazil!">
</dcc-trigger>
<dcc-trigger label="Brasil P"
             action="noticia/brasil/politica"
             value="Messias e rachadinha são avaliadas.">
</dcc-trigger>
<dcc-trigger label="Brasil E"
             action="noticia/brasil/esporte"
             value="Jogadores do Brasileirão se tornão propagadores de Covid-19.">
</dcc-trigger>
<dcc-trigger label="Bahia"
             action="noticia/bahia/esporte"
             value="Bahia vai a final da copa do nordeste.">
</dcc-trigger>

<dcc-lively-talk character="doctor"
                 speech="">
<subscribe-dcc topic="#/politica"></subscribe-dcc>
</dcc-lively-talk>
<dcc-lively-talk character="nurse"
                 speech="">
<subscribe-dcc topic="noticia/brasil/#"></subscribe-dcc>
</dcc-lively-talk>
<dcc-lively-talk character="patient"
                 speech="">
<subscribe-dcc topic="#"></subscribe-dcc>
</dcc-lively-talk>
~~~

---

## Tarefa Web Components 2

Crie dois componentes RSS usando o `<dcc-rss>` que assinem os canais:
  * canal 1 (ciência): https://www.wired.com/category/science/feed
  * canal 2 (design): https://www.wired.com/category/design/feed

Crie um agregador de mensagens usando o `<dcc-aggregator>` para notícias de ciência.

Crie três personagens (`doctor`, `nurse` e `patient`) usando o `<dcc-lively-talk>`. Cada um deles deve mostrar seletivamente (em seu balão) RSSs ou agregados, conforme os seguintes critérios:
* `doctor` - mostra notícias agregadas de ciências;
* `nurse` - mostra notícias de ciências;
* `patient` - mostra notícias de design.

### Composição de Componentes Web

_Para visualizar os componentes utilize o ambiente [DCC Playground](https://santanche.github.io/component2learn/labs/02-data-flow_messages/notebooks/messages/dccs/playground/)._

~~~html
<dcc-trigger label="Science"
             action="rss/science">
</dcc-trigger>
<dcc-trigger label="Design"
             action="rss/design">
</dcc-trigger>

<dcc-rss publish="rss/science" source="https://www.wired.com/category/science/feed">
  <subscribe-dcc topic="rss/science" role="step"></subscribe-dcc>
</dcc-rss>
<dcc-rss publish="rss/design" source="https://www.wired.com/category/design/feed">
  <subscribe-dcc topic="rss/design" role="step"></subscribe-dcc>
</dcc-rss>

<dcc-aggregator publish="aggregate/science" quantity="1">
  <subscribe-dcc topic="rss/science"></subscribe-dcc>
</dcc-aggregator>

<dcc-lively-talk character="doctor"
                 speech="">
<subscribe-dcc topic="aggregate/science"></subscribe-dcc>
</dcc-lively-talk>
<dcc-lively-talk character="nurse"
                 speech="">
<subscribe-dcc topic="rss/science"></subscribe-dcc>
</dcc-lively-talk>
<dcc-lively-talk character="patient"
                 speech="">
<subscribe-dcc topic="rss/design"></subscribe-dcc>
</dcc-lively-talk>
~~~