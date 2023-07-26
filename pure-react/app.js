
    const person = props => {
        return React.createElement('div',{}, [
            React.createElement('h1',{}, props.name),
            React.createElement('p',{},props.occupation)
        ])
    }

    const App = () => {
        return React.createElement('div', {}, [
            React.createElement('h1', { className: 'title' }, "react IS rendered"),
            React.createElement(person, {name: "Pieter", occupation:"software-developer"}, null),
            React.createElement(person, {name: "Andrei", occupation:"instructer"}, null),
            React.createElement(person, {name: "jamie", occupation:"web-developer"}, null),
        ])
    };


    const container = document.getElementById('root');
    const root = ReactDOM.createRoot(container);
    root.render(React.createElement(App));



