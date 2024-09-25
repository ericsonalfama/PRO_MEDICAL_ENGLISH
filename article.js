// Fichier : article.js

// Assurez-vous que data.js est bien inclus dans votre HTML avant cet appel

document.addEventListener("DOMContentLoaded", () => {
    const featuresCardsContainer = document.getElementById("features-cards");
  
    // Fonction pour créer un article à partir des données
    const createArticleCard = (article) => {
      // Création de l'élément <article>
      const articleCard = document.createElement("article");
      articleCard.classList.add("card");
  
      // Création de l'image
      const img = document.createElement("img");
      img.classList.add("card__background");
      img.src = article.imgSrc;
      img.alt = article.imgAlt;
/*       img.width = 1920;
      img.height = 2193; */
  
      // Contenu de la carte
      const cardContent = document.createElement("div");
      cardContent.classList.add("card__content", "flow");
  
      const contentContainer = document.createElement("div");
      contentContainer.classList.add("card__content--container", "flow");
  
      // Titre
      const title = document.createElement("h2");
      title.classList.add("card__title");
      title.setAttribute("id", "card__title");
      title.textContent = article.title;
  
      // Description
      const description = document.createElement("p");
      description.classList.add("card__description");
      description.textContent = article.description;
  
      // Bouton
      const button = document.createElement("button");
      button.classList.add("card__button");
      button.textContent = "Read more";
  
      // Assemblage de la carte
      contentContainer.appendChild(title);
      contentContainer.appendChild(description);
      cardContent.appendChild(contentContainer);
      cardContent.appendChild(button);
      articleCard.appendChild(img);
      articleCard.appendChild(cardContent);
  
      return articleCard;
    };
  
    // Parcours des données et création des articles
    articlesData.forEach(article => {
      const articleCard = createArticleCard(article);
      featuresCardsContainer.appendChild(articleCard);
    });
  });
  