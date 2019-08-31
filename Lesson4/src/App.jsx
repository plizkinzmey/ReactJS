import React from 'react';
import ReactDOM from 'react-dom';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './app/components/Blog';
import WelcomeModal from './app/components/WelcomeModal';



class App extends React.Component {
  render() {
    const postItems = [
      {
        HeaderPost: "День 1. Мы приняли решение.",
        WhoPost: "MEDVEDNEO ",
        DatePost: "November 14, 2015",
        BodyPost: "Сегодня один из самых важных дней в нашей жизни. Мы приняли решение жить в Канаде."
      },
      {
        HeaderPost: "День 2. Едем в Ванкувер)))",
        WhoPost: "MEDVEDNEO ",
        DatePost: "November 15, 2015",
        BodyPost: "Если вы читали мой прошлый пост День 1 то уже знаете, что вчера мы приняли главное решение в своей жизни."
      },
      {
        HeaderPost: "День 3. Сколько стоит переехать жить в Канаду?",
        WhoPost: "MEDVEDNEO ",
        DatePost: "November 16, 2015",
        BodyPost: `Этот вопрос нас интересовал больше всего, больше всего страхов и ужасов он на нас наводил. Очень часто в разных статьях мелькала
        цифра 20-30-40 тыс у. е. Эти цифры кажутся просто неподъемными и невероятно космическими. Да и заработав такие деньги тут, на Украине,
        вероятно врядли захочется куда-то ехать. Во всяком случае, так я думал раньше.`
      },
      {
        HeaderPost: "День 4. Не я один такой умный, или как начать учить язык",
        WhoPost: "MEDVEDNEO ",
        DatePost: "November 17, 2015",
        BodyPost: `Сегодня была небольшая встреча по работе со старым клиентом. Оказывается он сейчас усиленно готовится к переезду в Англию.
        Учат английский с женой полным ходом. А мужичку лет под 50 уже. И так оно ему неплохо дается.`
      },
      {
        HeaderPost: "День 5. 8000$, мечта и официальный сайт МИД Канады",
        WhoPost: "MEDVEDNEO ",
        DatePost: "November 18, 2015",
        BodyPost: `Сегодня я получил ответ от одной фирмы, в которую я отправлял Анкету на оценку шансов. Ну вот что мне ответили. В письме было вложение,
        от этого Александра. Где более детально он описал все вкусности своего предложения с хорошей новостью.`
      },
      {
        HeaderPost: "День 6. Express Entry или может чё нибудь другое?",
        WhoPost: "MEDVEDNEO ",
        DatePost: "November 19, 2015",
        BodyPost: `День прошел в дальнейшем изучении всех возможных путей въезда в Канаду легально и на правах постоянного резидента. Так называемый вид на
        жительство. Я еще раз прогнал себя через все возможные варианты. От фермы до инвестора. ))))`
      }
    ];

return <div className="container-fluid">
  <WelcomeModal/>
  <Blog items={postItems}/>
    </div>
  }
}
ReactDOM.render(
  <App/>, document.querySelector('#root'));