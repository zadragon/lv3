import * as S from "./styles/index";
import "./App.css";
import { Icon1, Icon2 } from "./components/Icons";
import { useState } from "react";
import styled from "styled-components";

function App() {
	const buttonAction = (type) => {
		type === "type1" && alert("버튼을 만들어주세요.");
		type === "type2" && prompt("어렵나요?");
	};

	const onSave = (e) => {
		e.preventDefault();
		alert(`{name: ${state.name}, price: ${state.price}}`);
	};

	const [state, setState] = useState({
		name: "",
		price: "",
	});

	const [number, setNumber] = useState("");

	const addComma = (price) => {
		const inputNumber = price.replace(/[^0-9]/g, ""); // 숫자 이외의 문자 제거
		let returnString = inputNumber?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		return returnString;
	};

	const onChange = (e) => {
		const { id } = e.target;
		const { value } = e.target;
		let str;
		if (id === "price") {
			str = value.replace(/[^0-9]/g, "");
			setNumber(addComma(value));
		} else {
			str = value;
		}
		setState({
			...state,
			[id]: str,
		});
	};

	const init = [
		{ selected: true, title: "리액트" },
		{ selected: false, title: "자바" },
		{ selected: false, title: "스프링" },
		{ selected: false, title: "리액트네이티브" },
	];

	const [api, setApi] = useState(init);

	const [selectList, SetSelectList] = useState({
		isShow: false,
		top: "",
		left: "",
	});

	const onSelectToggle = (e) => {
		if (e.target.id === "selectUi") {
			SetSelectList({
				...selectList,
				isShow: !selectList.isShow,
				top: e.target.offsetTop,
				left: e.target.offsetLeft,
			});
		} else if (e.target.id === "selectList") {
		} else {
			SetSelectList({
				...selectList,
				isShow: false,
			});
		}
	};

	const clickSelected = (idx) => {
		setApi(
			api.map((item, i) => {
				if (i === idx) {
					return { ...item, selected: true };
				} else {
					return { ...item, selected: false };
				}
			})
		);
	};

	const [modalState, setModalState] = useState({
		type1Show: false,
		type2Show: false,
	});

	const modalAction = (e, modalType) => {
		e.stopPropagation();
		if (e.target !== e.currentTarget) return; //이벤트 버블링 TIL쓰기
		setModalState({ ...modalState, ...modalType });
	};

	return (
		<div className="App" onClick={onSelectToggle}>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "5px",
					padding: "0 0 10px",
				}}
			>
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
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					padding: "0 0 10px",
				}}
			>
				<h1>Input</h1>
				<form>
					<div style={{ display: "flex", gap: "5px" }}>
						<label htmlFor="name">이름</label>
						<input type="text" id="name" onChange={(e) => onChange(e)} value={state.name} />
					</div>
					<div style={{ display: "flex", gap: "5px" }}>
						<label htmlFor="price">가격</label>
						<input type="text" id="price" onChange={(e) => onChange(e)} value={number} />
					</div>
					<S.Button type="submit" onClick={(e) => onSave(e)}>
						저장
					</S.Button>
				</form>
			</div>
			<hr />
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					padding: "0 0 10px",
				}}
			>
				<h1>Select</h1>
				<SelectArea>
					<Select onClick={onSelectToggle} id="selectUi">
						{api.map((item) => item.selected && item.title)}
					</Select>
				</SelectArea>
			</div>
			{selectList.isShow && (
				<SelectList selectList={selectList} id="selectList">
					{api.map((item, idx) => (
						<li key={idx} onClick={() => clickSelected(idx)}>
							{item.title}
						</li>
					))}
				</SelectList>
			)}
			<hr />
			<div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
				<h1>Modal</h1>
				<S.ClickButton color="#f3a683" className="large" onClick={(e) => modalAction(e, { type1Show: true })}>
					Open Modal
				</S.ClickButton>

				<S.ClickButton color="#be2edd" className="large" onClick={(e) => modalAction(e, { type2Show: true })}>
					Open Modal
				</S.ClickButton>
			</div>

			{modalState.type1Show && (
				<Dimmed>
					<div className="modalPop">
						<div className="btnArea">
							<S.Button className="medium" onClick={(e) => modalAction(e, { type1Show: false })}>
								취소
							</S.Button>
							<S.Button className="medium">확인</S.Button>
						</div>
					</div>
				</Dimmed>
			)}

			{modalState.type2Show && (
				<Dimmed onClick={(e) => modalAction(e, { type2Show: false })}>
					<div className="modalPop">
						<div className="btnArea">
							<S.Button className="medium" onClick={(e) => modalAction(e, { type2Show: false })}>
								닫기
							</S.Button>
						</div>
					</div>
				</Dimmed>
			)}
		</div>
	);
}

const Dimmed = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.2);
	width: 100%;
	height: 100%;
	.modalPop {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: #fff;
		width: 500px;
		height: 300px;
	}
	.btnArea {
		position: absolute;
		bottom: 10px;
		left: 0;
		width: 100%;
		display: flex;
		justify-content: center;
		gap: 5px;
	}
`;

const SelectArea = styled.div`
	overflow: hidden;
	border: 2px solid #ddd;
	padding: 20px 15px;
`;

const Select = styled.div`
	position: relative;
	border: 1px solid #ddd;
	padding: 10px;
	width: 150px;
	border-radius: 5px;
	display: inline-block;
	cursor: pointer;
	&:after {
		content: "👇";
		position: absolute;
		top: 10px;
		right: 10px;
	}
`;

const SelectList = styled.div`
	position: absolute;
	top: ${(props) => props.selectList.top + 45}px;
	left: ${(props) => props.selectList.left}px;
	border: 1px solid #ddd;
	padding: 0;
	width: 150px;
	border-radius: 5px;
	display: inline-block;
	background: #fff;
	li {
		list-style: none;
		font-size: 14px;
		padding: 6px 10px;
		border-top: 1px solid #ddd;
		&:hover {
			background: #be2edd;
		}
		&:active {
			background: #f3a683;
		}
		&:first-child {
			border-top: none;
		}
	}
`;
export default App;
