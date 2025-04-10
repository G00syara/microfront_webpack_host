import { Link } from "react-router";

// Главный компонент приложения
export const HomePage = () => {
    return (
        <div>
            <h1>Главная страница</h1>
            <nav>
                <Link to="/mf/main">Перейти на страницу с RemoteComponent</Link>
            </nav>
        </div>
    );
};