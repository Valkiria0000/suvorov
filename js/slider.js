function slider() {
  if (window.matchMedia("screen and (max-width: 830px)").matches) {
    const staticBlock = document.querySelector(".section-gallary__container");
    const gallary = document.querySelector(".section-gallary");
    staticBlock.style = `display: none`;
    gallary.innerHTML = `
   <div class="swiper mySwiper ">
   <div class="swiper-wrapper">
     <div class="swiper-slide">
       <div class="section-gallary__card">
         <img
           class="swiper-img"
           src="img/gallary/foto1.png"
           alt="фото Шойгу"
         />
         <p class="swiper-text">
           В мае 2022 года, министр обороны РФ Сергей Шойгу обратился к РПЦ
           с предложением канонизировать А.В.Суворова. Принял предложение
           об участии в фильме, чтобы рассказать о причинах такой
           инициативы.
         </p>
       </div>
       <!-- /.section-gallary__card -->
     </div>
     <div class="swiper-slide">
       <div class="section-gallary__card">
         <img
           class="swiper-img"
           src="img/gallary/foto3.png"
           alt="фото священника"
         />
         <p class="swiper-text">
           Благословил авторов Проекта на создание фильма известный в
           России и Франции отец Василий (Паскье), игумен Свято-Троицкого
           мужского монастыря г.Чебоксары архимандрит Русской православной
           церкви.
         </p>
       </div>
       <!-- /.section-gallary__card -->
     </div>
     <div class="swiper-slide">
       <div class="section-gallary__card">
         <img
           class="swiper-img"
           src="img/gallary/foto4.png"
           alt="фото священника"
         />
         <p class="swiper-text">
           Инициатива народного сбора на создание фильма Александр Суворов:
           «Человек-Ангел», исходит также и от Софийского («Военного»)
           храма, в котором ни раз молился сам Суворов. Настоятель
           протоиерей Геннадий Зверев, Царскосельское благочиние.
         </p>
       </div>
       <!-- /.section-gallary__card -->
     </div>
     <div class="swiper-slide">
       <div class="section-gallary__card">
         <img
           class="swiper-img"
           src="img/gallary/foto2.png"
           alt="фото Татарова"
         />
         <p class="swiper-text">
           Режиссер и автор сценария фильма Валерий Татаров. В последние
           годы этот известный в России тележурналист создал ряд
           документальных лент в цикле «Забытые великие» о выдающихся
           патриотах России.
         </p>
       </div>
       <!-- /.section-gallary__card -->
     </div>
   </div>
 </div>
   `;
  }
  return;
}
slider();
