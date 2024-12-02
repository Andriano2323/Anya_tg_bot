function handleButtonClick(action) {
  switch (action) {
    case 'Разборы':
      alert('📂 You clicked on Cases!');
      break;
    case 'Эфиры':
      alert('🎥 You clicked on Videos!');
      break;
    case 'Менторство':
      alert('🤝 You clicked on Mentorship!');
      break;
    case 'Кейсы':
      alert('📜 You clicked on Texts!');
      break;
    default:
      alert('Unknown action!');
  }
}