const aiToolsAll = async () => {
  const url = "https://openapi.programming-hero.com/api/ai/tools";
  const res = await fetch(url);
  const data = await res.json();
  const allData = data.data.tools;
  displayAiData(allData);
};

const displayAiData = (allData) => {
  const showCardContainer = document.getElementById("show_cardContainer");
  allData.forEach((singleAi) => {
    console.log(singleAi);
    const show_card = document.createElement("div");
    show_card.innerHTML = `
        <div class="card  bg-base-100 shadow-xl p-3 bg-gray-400 h-[500px]">
        <figure><img class="rounded-b-xl" src="${singleAi.image}" alt="Shoes"/></figure>
        <div class="">
          <h2 class="card-title">Features</h2>
          <ol>
            <li>${singleAi.features[0]}</li>
            <li>${singleAi.features[1]}</li>
            <li>${singleAi.features[2]}</li>
          </ol>
          <hr class="my-4">
          <h1 class="text-2xl font-semibold">${singleAi.name}</h1>
          <p>${singleAi.published_in}</p>
          <div class="flex justify-center mt-5">
            <button id="show_modal" class="btn btn-primary w-full text-xl" onclick = "showAiDetails('${singleAi.id}');my_modal_3.showModal()">Show Details</button>
          </div>
        </div>
      </div>
        `;
    showCardContainer.appendChild(show_card);
  });
};

const showAiDetails = async (id) => {
  const url1 = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  const res = await fetch(url1);
  const data = await res.json();
  showModalAi(data.data)
};

const showModalAi = (element) =>{
    console.log(element)
    const elementModal = document.getElementById('show_element');
    elementModal.innerHTML = `
    <img class="rounded-xl my-3" src="${element.image_link[0]}" alt="">
    <div>
    <h1 class="text-xl font-semibold text-center">Hi, how are you doing today?</h1>
    <p class="">I'm doing well, thank you for asking. How can I assist you today?</p>
    </div>
    `
}
    
aiToolsAll();
