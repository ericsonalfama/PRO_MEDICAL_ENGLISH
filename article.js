document.addEventListener("DOMContentLoaded", () => {
   const featuresCardsContainer = document.getElementById("features-cards");

   // Function to create an article from the data
   const createArticleCard = (article) => {
      const articleCard = document.createElement("article");
      articleCard.classList.add("card");

      const img = document.createElement("img");
      img.classList.add("card__background");
      img.src = article.imgSrc;
      img.alt = article.imgAlt;

      const cardContent = document.createElement("div");
      cardContent.classList.add("card__content", "flow");

      const contentContainer = document.createElement("div");
      contentContainer.classList.add("card__content--container", "flow");

      const title = document.createElement("h2");
      title.classList.add("card__title");
      title.setAttribute("id", "card__title");
      title.textContent = article.title;

      const description = document.createElement("p");
      description.classList.add("card__description");
      description.textContent = article.description;

      const button = document.createElement("button");
      button.classList.add("card__button");
      button.textContent = "Read more";

      contentContainer.appendChild(title);
      contentContainer.appendChild(description);
      cardContent.appendChild(contentContainer);
      cardContent.appendChild(button);
      articleCard.appendChild(img);
      articleCard.appendChild(cardContent);

      return articleCard;
   };

   articlesData.forEach(article => {
      const articleCard = createArticleCard(article);
      featuresCardsContainer.appendChild(articleCard);
   });
});
