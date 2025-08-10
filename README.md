# 🏁 Guess the Flag Game

A fun and interactive React game where players test their knowledge of world flags by guessing which country each flag belongs to.

## 🎮 Features

- **Interactive Gameplay**: Guess the country for 20 different world flags
- **Multiple Choice**: Four options per question with randomized answers
- **Score Tracking**: Keep track of your score throughout the game
- **Beautiful UI**: Modern, responsive design with smooth animations
- **Game Over Screen**: See your final score and percentage at the end
- **Mobile Responsive**: Works perfectly on desktop and mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Guess-the-Flag-Game
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` folder.

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **TypeScript** - Type safety and better development experience
- **Webpack** - Module bundler
- **CSS3** - Styling with modern features like Grid, Flexbox, and animations
- **HTML5** - Semantic markup

## 📁 Project Structure

```
Guess-the-Flag-Game/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/
│   │   ├── FlagGame.tsx    # Main game component
│   │   └── FlagGame.css    # Game styles
│   ├── App.tsx             # Root component
│   ├── App.css             # App styles
│   ├── index.tsx           # Entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── webpack.config.js       # Webpack configuration
└── README.md               # Project documentation
```

## 🎯 How to Play

1. A flag emoji will be displayed on the screen
2. Four country options will be shown below the flag
3. Click on the country you think the flag belongs to
4. You'll get immediate feedback (correct/incorrect)
5. The correct answer will be shown
6. After 2 seconds, the next question will appear
7. The game continues for 10 questions
8. At the end, you'll see your final score and percentage
9. Click "Play Again" to start a new game

## 🌍 Countries Included

The game includes flags from 20 different countries:
- United States, United Kingdom, Canada
- Germany, France, Italy, Spain
- Japan, Australia, Brazil
- India, China, Russia
- South Korea, Mexico, Netherlands
- Sweden, Norway, Denmark, Finland

## 🎨 Design Features

- **Gradient Backgrounds**: Beautiful purple gradient theme
- **Glass Morphism**: Semi-transparent containers with backdrop blur
- **Smooth Animations**: Flag bounce, button hover effects, and celebration animations
- **Responsive Design**: Adapts to different screen sizes
- **Color-coded Feedback**: Green for correct answers, red for incorrect
- **Modern Typography**: Inter font family for clean readability

## 🔧 Customization

### Adding More Countries

To add more countries, edit the `countries` array in `src/components/FlagGame.tsx`:

```typescript
const countries: Country[] = [
  // ... existing countries
  { name: 'New Country', flag: '🏳️', code: 'NC' },
];
```

### Changing Game Length

To change the number of questions, modify the condition in the `handleAnswer` function:

```typescript
if (totalQuestions + 1 >= 15) { // Change from 10 to desired number
  setGameOver(true);
}
```

### Styling

The game uses CSS custom properties and modern CSS features. You can customize colors, animations, and layout by modifying the CSS files.

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Flag emojis provided by Unicode Consortium
- Inter font family by Google Fonts
- Inspiration from various geography quiz games

---

**Enjoy playing Guess the Flag! 🌍🏁** 