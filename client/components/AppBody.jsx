let Transition = React.addons.CSSTransitionGroup;

AppBody = React.createClass({
  getDefaultProps() {
    return {
      tabs: ["Tab 1", "Tab 2", "Tab 3"]
    }
  },
  getInitialState() {
    return {
      modal: false
    }
  },
  ionModal(tab, content) {
    this.setState({
      modal: (
        <IonModal modalContent={content}>
          <div className="h1 title">{tab}</div>
          <button onClick={ () => this.setState({modal:false}) } className="button button-icon active">
            <i className="icon ion-ios-close-empty"></i>
          </button>
        </IonModal>
      )
    })
  },
  setModalState(status) {
    this.setState({
      modal: status
    })
  },
  render() {
    return (
      <div className="ionic-body">
        {this.state.modal ? <Backdrop /> : false}
        <Transition transitionName="modal">
          {this.state.modal}
        </Transition>
        <div className="bar bar-header bar-light">
          <ReactRouter.Link className="button button-icon icon ion-ios-search-strong" to={"/other"}></ReactRouter.Link>
          <ReactRouter.Link className="h1 title" to={"/"}>Clikque</ReactRouter.Link>
          <ReactRouter.Link className="button button-icon icon ion-android-person" to={"/settings"}></ReactRouter.Link>
        </div>
        <div className="view">
          <div className="scroll-content ionic-scroll">
            <div className="content overflow-scroll has-header">
              {this.props.children && React.cloneElement(this.props.children, {
                ionModal: this.ionModal,
                setModalState: this.setModalState
              })}
            </div>
          </div>
        </div>
        <div className="tabs tabs-icon-top">
          {this.props.tabs.map((tab, i) => {
              return (
                <a className="tab-item" key={tab} onClick={this.ionModal.bind(null, tab)}>
                  <i className="icon ion-star"></i>
                  {tab}
                </a>
              )
            })
          }
        </div>
      </div>
    )
  }
});
