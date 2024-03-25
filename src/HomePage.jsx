import React, { useState } from 'react';

const ImageWithButton = ({ imageUrl, buttonText, extraText }) => {
  return (
    <div className="flex flex-col items-center">
      <img className="w-48 h-48 object-cover rounded-lg mb-2" src={imageUrl} alt="Image" />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">{buttonText}</button>
      {extraText && (
        <div className="text-center mt-2">
          <h3 className="text-lg font-semibold">{extraText.title}</h3>
          <p className="text-gray-700">{extraText.paragraph}</p>
        </div>
      )}
    </div>
  );
}

const NavBar = ({ handleSearch }) => {
  return (
    <nav className="bg-gray-800 py-4 px-8 w-full mb-4">
      <div className="max-w-7xl mx-auto">
        <input type="text" placeholder="View Member's job title..." className="bg-white rounded-full px-4 py-2 w-full" onChange={handleSearch} />
      </div>
    </nav>
  );
}

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [memberIndex, setMemberIndex] = useState(-1); // Initialize with -1 to indicate no match
  const [error, setError] = useState('');

  const imageUrls = [
    "https://st4.depositphotos.com/12985790/23389/i/450/depositphotos_233890500-stock-photo-portrait-handsome-businessman-formal-wear.jpg",  // Vincent
    "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg",  // Allan
    "https://static.vecteezy.com/system/resources/thumbnails/031/725/956/small_2x/ai-generated-studio-portrait-of-handsome-indian-man-on-colour-background-photo.jpg",  // Francis
    "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1711238400&semt=sph",  // Mbuvi
    "https://st4.depositphotos.com/12985790/23389/i/450/depositphotos_233890500-stock-photo-portrait-handsome-businessman-formal-wear.jpg",  // Mary
    "https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg",  // Jane
    "https://st4.depositphotos.com/12985790/23389/i/450/depositphotos_233890500-stock-photo-portrait-handsome-businessman-formal-wear.jpg",  // Alex
    "https://st4.depositphotos.com/12985790/23389/i/450/depositphotos_233890500-stock-photo-portrait-handsome-businessman-formal-wear.jpg",  // Jack
    "https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg",  // Emma
    "https://st4.depositphotos.com/12985790/23389/i/450/depositphotos_233890500-stock-photo-portrait-handsome-businessman-formal-wear.jpg",  // Sophia
    "https://st4.depositphotos.com/12985790/23389/i/450/depositphotos_233890500-stock-photo-portrait-handsome-businessman-formal-wear.jpg",  // William
  ];
  ;
  ;
  const buttonTexts = [
    "Vincent",
    "Allan",
    "Francis",
    "Mbuvi",
    "Mary",
    "Jane",
    "Alex",
    "Jack",
    "Emma",
    "Sophia",
    "William",
  ];
  const extraTexts = [
    { title: "Marketer", paragraph: "Vincent is a dedicated marketer. He leads our marketing efforts and ensures our products reach the right audience." },
    { title: "Designer", paragraph: "Allan is our talented designer. He is responsible for creating stunning designs and user interfaces." },
    { title: "Developer", paragraph: "Francis is a skilled developer. He specializes in backend development and ensures our applications run smoothly." },
    { title: "CEO", paragraph: "Mbuvi is the CEO of our company. He leads the executive team and oversees the overall operations." },
    { title: "HR Manager", paragraph: "Mary is our HR Manager. She oversees all human resource activities and ensures a positive work environment." },
    { title: "Product Manager", paragraph: "Jane is our Product Manager. She leads product development and ensures our products meet customer needs." },
    { title: "Sales Manager", paragraph: "Alex is our Sales Manager. He leads the sales team and drives revenue growth." },
    { title: "Customer Support", paragraph: "Jack is our Customer Support Manager. He ensures our customers receive excellent service." },
    { title: "Operations Manager", paragraph: "Emma is our Operations Manager. She oversees daily operations and ensures efficiency." },
    { title: "Marketing Specialist", paragraph: "Sophia is our Marketing Specialist. She implements marketing strategies to promote our products." },
    { title: "Software Engineer", paragraph: "William is a Software Engineer. He develops software solutions to meet business needs." },
  ];

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query === '') {
      // Reset the page when input is empty
      setMemberIndex(-1);
      setError('');
      return;
    }

    // Find the index of the member whose name matches the query
    const index = buttonTexts.findIndex(text => text.toLowerCase().includes(query));
    if (index !== -1) {
      setMemberIndex(index);
      setError('');
    } else {
      setMemberIndex(-1);
      setError(`"${query}" is not in the members search a name that you see in the page`);
    }
  }

  return (
    <div>
      <NavBar handleSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {searchQuery === '' ? (
          buttonTexts.map((buttonText, index) => (
            <div key={index}>
              <ImageWithButton
                imageUrl={imageUrls[index]}
                buttonText={buttonText}
                // extraText={extraTexts[index]}
              />
            </div>
          ))
        ) : memberIndex !== -1 && (
          <div>
            <ImageWithButton
              imageUrl={imageUrls[memberIndex]}
              buttonText={buttonTexts[memberIndex]}
              extraText={extraTexts[memberIndex]}
            />
          </div>
        )}
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}

export default HomePage;




















