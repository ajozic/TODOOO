import React from "react";

const TodoTest = () => {
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <main role="main" className="col-lg-12 d-flex justify-content-center">
                        <div id="loader" className="text-center">
                            <p className="text-center">Loading...</p>
                        </div>

                        <section id="todoSection">
                            <div id="content" className="w-80">
                                <form onSubmit="App.createTask(); return false;" className="w-100">
                                    <div className="d-flex flex-row">
                                        <input id="newTask" type="text" className="form-control mx-1"
                                               placeholder="Add task..." required />
                                            <input id="newTaskAssignee" type="text" className="form-control mx-1"
                                                   placeholder="Add task's assignee..." required='true' />
                                    </div>
                                    <input type="submit" hidden=""/>
                                </form>

                                <div className="d-flex flex-row justify-content-around align-items-start">

                                    <div className="d-flex inProgress flex-column text-center px-3 border-right"
                                         style={{width: '50%'}}>
                                        <h3 className="pb-3 border-bottom">In-progress</h3>
                                        <ul id="taskList" className="list-unstyled">

                                            <div className="taskTemplate py-2" className="checkbox"
                                                 style={{display: "none"}}>
                                                <label
                                                    className="d-flex flex-row justify-content-between align-items-center">
                                                    <input type="checkbox"/>
                                                    <div className="content">Task content goes here...</div>
                                                    <div className="assignee">Task assignee goes here...</div>
                                                </label>
                                            </div>

                                        </ul>
                                    </div>

                                    <div className="d-flex completed flex-column text-center px-3" style={{width: '50%'}}>
                                        <h3 className="pb-3 border-bottom">Completed</h3>
                                        <ul id="completedTaskList" className="list-unstyled">
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
            <script src="vendor/web3/dist/web3.js"></script>
            <script src="vendor/bootstrap/dist/js/bootstrap.min.js"></script>
            <script src="vendor/truffle-contract/dist/truffle-contract.js"></script>
            <script src="app.js"></script>
        </>
    )
}
export default TodoTest
