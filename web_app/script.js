function handleButtonClick(action) {
    switch (action) {
      case 'cases':
        alert('📂 You clicked on Cases!');
        break;
      case 'videos':
        alert('🎥 You clicked on Videos!');
        break;
      case 'mentorship':
        alert('🤝 You clicked on Mentorship!');
        break;
      case 'texts':
        alert('📜 You clicked on Texts!');
        break;
      default:
        alert('Unknown action!');
    }
  }
  