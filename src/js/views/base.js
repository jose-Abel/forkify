export const elements = {
  searchForm: document.querySelector(".search"),
  searchInput: document.querySelector(".search__field"),
  searchRes: document.querySelector(".results"),
  searchResList: document.querySelector(".results__list"),
  searchResPages: document.querySelector(".results__pages"),
  recipe: document.querySelector(".recipe")
};

export const elementStrings = {
  loader: "loader"
};

export const renderLoader = parent => {
  // const loader = `
  //     <div class="${elementStrings.loader}">
  //         <svg>
  //             <use href=img/icons.svg#icon-cw"></use>
  //         </svg>
  //     </div>
  // `;

  //new loader added
  const loader = `
    <div class="${elementStrings.loader}" id="loader-4">
      <span></span>
      <span></span>
      <span></span>
    </div>
    `;

  parent.insertAdjacentHTML("afterbegin", loader);
};

export const clearLoader = () => {
  const loader = document.querySelector(`.${elementStrings.loader}`);

  if (loader) {
    loader.parentElement.removeChild(loader);
  }
};
