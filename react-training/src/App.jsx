/* 
  Masz za zadanie poprawić kod JSX w pliku App.jsx, 
  który nie kompiluje się poprawnie z powodu błędów
  strukturalnych oraz zbędnych elementów. Należy
  również pozbyć się błędów w konsoli. 
*/

// const App = () => {

// const header = "Witaj w React"

//   return (
//     <>
//       <div>
//         <h1 className="header">{header}</h1>
//         <p>To jest paragraf w React</p>
//         <div>
//           <span>React jest </span>
//           <span> niesamowity.</span>
//         </div>
//       </div>
//       <footer>Stopka</footer>
//     </>
//   );
/* 
  Twoim zadaniem jest modyfikacja istniejącego kodu w taki sposób,
  aby oprócz godzin i minut wyświetlał również sekundy. Czas powinien
  być wyświetlany w formacie hh:mm:ss, np. 01:05:07. 
  Pamiętaj, aby dodać wiodące zera, jeśli godziny, minuty lub sekundy są jednocyfrowe.
*/
const currentDate = new Date();

const App = () => {
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getMinutes()).padStart(2, "0");
  return (
    <>
      <h1>
        {hours}:{minutes}:{seconds}
      </h1>
    </>
  );
};

export default App;
