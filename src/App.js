import * as S from "./styles/index";

function App() {
	const Icon1 = () => {
		return (
			<div>
				<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1 1L5 5L1 9" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
				</svg>
			</div>
		);
	};

	const Icon2 = () => {
		return (
			<div>
				<svg width="14" height="17" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M10 23.5C11.1046 23.5 12 22.6046 12 21.5C12 20.3954 11.1046 19.5 10 19.5C8.89543 19.5 8 20.3954 8 21.5C8 22.6046 8.89543 23.5 10 23.5ZM10 26C12.4853 26 14.5 23.9853 14.5 21.5C14.5 19.0147 12.4853 17 10 17C7.51472 17 5.5 19.0147 5.5 21.5C5.5 23.9853 7.51472 26 10 26Z"
						fill="black"
					></path>
					<path
						d="M0 11C0 5.47715 4.47715 1 10 1C15.5228 1 20 5.47715 20 11V19C20 20.1046 19.1046 21 18 21H2C0.895431 21 0 20.1046 0 19V11Z"
						fill="white"
					></path>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M17.5 18.5V11C17.5 6.85786 14.1421 3.5 10 3.5C5.85786 3.5 2.5 6.85786 2.5 11V18.5H17.5ZM10 1C4.47715 1 0 5.47715 0 11V19C0 20.1046 0.895431 21 2 21H18C19.1046 21 20 20.1046 20 19V11C20 5.47715 15.5228 1 10 1Z"
						fill="black"
					></path>
					<circle cx="17.5" cy="4.5" r="4.5" fill="#EB4C4C"></circle>
				</svg>
			</div>
		);
	};

	const buttonAction = (type) => {
		type === "type1" && alert("버튼을 만들어주세요.");
		type === "type2" && prompt("어렵나요?");
	};

	const onSave = (e) => {
		e.preventDefault();
	};

	return (
		<div className="App">
			<div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
				<h1>Button</h1>
				<div style={{ display: "flex", gap: "5px" }}>
					<S.ClickButton color="#f3a683" className="large" onClick={() => buttonAction("type1")}>
						Large Button
						<Icon1 />
					</S.ClickButton>
					<S.Button className="medium">Medium Button</S.Button>
					<S.Button className="small">Small Button</S.Button>
				</div>
				<div style={{ display: "flex", gap: "5px" }}>
					<S.ClickButton color="#be2edd" className="large" onClick={() => buttonAction("type2")}>
						Large Button
						<Icon2 />
					</S.ClickButton>
					<S.NewButton bgColor="#63cdda" className="medium">
						Medium Button
					</S.NewButton>
					<S.NewButton bgColor="#63cdda" className="small">
						Small Button
					</S.NewButton>
				</div>
			</div>
			<hr />
			<div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
				<h1>Input</h1>
				<form>
					<div style={{ display: "flex", gap: "5px" }}>
						<label for="name">이름</label>
						<input type="text" id="name" />
					</div>
					<div style={{ display: "flex", gap: "5px" }}>
						<label for="price">가격</label>
						<input type="number" id="price" />
					</div>
					<button type="submit" onClick={(e) => onSave(e)}>
						저장
					</button>
				</form>
			</div>
			<hr />
		</div>
	);
}

export default App;
