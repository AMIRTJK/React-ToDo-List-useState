import { useState } from "react";
import "./App.css";

function App() {
  // useState for Data
  const [data, setData] = useState([
    {
      id: 1,
      title: "#NOTE 1",
      isComplete: false,
    },
    {
      id: 2,
      title: "#NOTE 2",
      isComplete: false,
    },
  ]);
  // useState for Modal
  const [modalOpen, setModalOpen] = useState(false);
  // useState for Input Add
  const [text, setText] = useState("");

  // Функция удалить
  function deleteData(id) {
    setData((data) => data.filter((e) => e.id !== id));
  }
  // Функция checked
  function checkedData(id) {
    setData((data) =>
      data.map((prevItem) =>
        prevItem.id === id
          ? {
              ...prevItem,
              isComplete: !prevItem.isComplete,
            }
          : prevItem
      )
    );
  }

  // Show Modal
  function showModal() {
    setModalOpen(true);
  }
  // Hidden Modal
  function hideModal() {
    setModalOpen(false);
  }
  // Функция добавить Add
  function addData() {
    let newData = {
      id: new Date().getTime(),
      title: text,
      isComplete: false,
    };
    setData([...data, newData]);
    setText("");
  }
  return (
    <>
      <div className="container">
        <div className="wrapper-todo-list py-[40px] w-[70%] mx-auto">
          <h1 className="text-center text-[26px] font-[600] text-[#252525]">
            TODO LIST
          </h1>
          <div className="todo-list">
            <div className="wrapper-search flex items-center justify-between gap-[16px]">
              <div className="wrapper-input flex justify-between items-center h-[38px] w-[100%] border-[#6C63FF] border-[1px] rounded-[5px] px-[16px]">
                <input
                  type="text"
                  placeholder="Search note..."
                  className="placeholder-[#C3C1E5] font-[400] h-[100%] w-[100%] rounded-[10px] outline-none"
                />
                <img
                  src="src/assets/search.svg"
                  alt=""
                  className="cursor-pointer"
                />
              </div>
              <div className="wrapper-select p-[10px] bg-[#6C63FF] rounded-[5px] h-[38px] flex items-center">
                <select
                  name=""
                  id=""
                  className="outline-none bg-[transparent] text-[#fff]"
                >
                  <option value="true" className="text-[#6C63FF]">
                    Complete
                  </option>
                  <option value="false" className="text-[#6C63FF]">
                    Incomplete
                  </option>
                </select>
              </div>
              {/* Модальное окно */}
              {setModalOpen && (
                <div
                  className={`${
                    modalOpen ? "block" : "hidden"
                  } modal-add absolute bg-[#00000048] w-[100%] h-[100vh] top-0 left-0`}
                >
                  <div className="modal-container w-[25%]  bg-[#fff] absolute top-[25%] left-[35%] h-[30vh] rounded-[20px]">
                    <div className="wrapper-modal flex flex-col justify-between p-[30px]">
                      <div className="wrapper-input  flex flex-col gap-[25px]">
                        <h2 className="text-center text-[24px] font-[500] uppercase">
                          New Note
                        </h2>
                        <input
                          onChange={(event) => setText(event.target.value)}
                          type="text"
                          value={text}
                          placeholder="Input your note..."
                          className="w-[100%] h-[38px] px-[16px] placeholder-[#C3C1E5] font-[300] border-[1px] border-[#6C63FF] rounded-[5px] outline-none"
                        />
                      </div>
                      <div className="wrapper-button flex justify-between items-center mt-[80px]">
                        <button
                          onClick={hideModal}
                          className="uppercase py-[5px] px-[22px] border-[#6C63FF] border-[1px] rounded-[5px] text-[#6C63FF]"
                        >
                          cancel
                        </button>
                        <button
                          onClick={() => {
                            addData();
                            hideModal();
                          }}
                          className="uppercase py-[5px] px-[22px] bg-[#6C63FF] rounded-[5px] text-[#fff]"
                        >
                          apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <button
                onClick={showModal}
                className="add-modal h-[38px] bg-[#6C63FF] text-[#fff] px-[30px] rounded-[5px]"
              >
                Add
              </button>
            </div>
            <ul className="wrapper-list mt-[30px] flex flex-col gap-[25px]">
              {data.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between border-b-[1px] border-[#6C63FF] pb-[17px]"
                >
                  <div className="content-list flex items-center gap-[17px]">
                    <input
                      type="checkbox"
                      checked={item.isComplete}
                      onChange={() => {
                        checkedData(item.id);
                      }}
                      className="h-[26px] w-[26px] cursor-pointer"
                    />
                    <p
                      className={`text-[20px] font-[500] ${
                        item.isComplete ? "line-through text-[#25252550]" : ""
                      }`}
                    >
                      {item.title}
                    </p>
                  </div>
                  <div className="panel-control flex items-center gap-[10px]">
                    <button>
                      <img src="src/assets/edit.svg" alt="" />
                    </button>
                    <button onClick={() => deleteData(item.id)}>
                      <img src="src/assets/delete.svg" alt="" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
