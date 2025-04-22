This is a basic React project that uses **Chakra UI** for styling and components, and **React Router** for client-side routing.

## 🚀 Tech Stack

- [React](https://reactjs.org/) – A JavaScript library for building user interfaces
- [Chakra UI](https://chakra-ui.com/) – Accessible, reusable component library for React
- [React Router DOM](https://reactrouter.com/) – Declarative routing for React apps

## 📁 Project Structure

🚧 Challenges Faced

1. Problem with routing configuration in React Router
   Description: When trying to integrate React Router, I encountered issues when setting up relative and absolute routes in the project.

Solution: I changed the routes from relative to absolute and reorganized the files so the paths were easier to manage.

2. Issues with conditional rendering
   Description: When implementing conditional rendering to show content only when the user is authenticated, I realized the Home component was rendering twice.

Solution: I decided to keep the routes inside Home so the Navbar would only appear when the user is logged in.

3. Integrating the Navbar with Chakra UI
   Description: I had trouble integrating a Navbar using Chakra UI without breaking the routes or duplicating content.

Solution: I used Flex and HStack to organize the layout and make sure the Navbar was responsive and compatible with routing.

4. Errors installing React Router
   Description: I made a mistake installing React Router because I forgot to use the correct package react-router-dom.

Solution: I installed the correct package with npm install react-router-dom and made sure all dependencies were compatible.
