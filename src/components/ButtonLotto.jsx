const ButtonLotto = () => {

  const getRandomNum = (min, max) => {
    const randomNumbers = []
    for (let i = 0; i < 7; i++) {
      randomNumbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    console.log(randomNumbers)
  }

  return (
    <button onClick={() => getRandomNum(1, 50)}>Lotto</button>
  )
}

export default ButtonLotto