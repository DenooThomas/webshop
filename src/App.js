import {colors} from "./assets/colors"
import {createUseStyles} from 'react-jss'
import Home from "pages/Home/Home"
const useStyles = createUseStyles({
  AppCont: {
    backgroundColor: colors.black,
    color: 'white'
  }
})
function App() {
  const isDark = true

  const classes = useStyles()
  
  return (
    <div className={isDark ? classes.AppCont : 'light'}>
      <p>test</p>
      <Home />
    </div>
  );
}

export default App;
