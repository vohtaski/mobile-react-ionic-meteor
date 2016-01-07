const routes = (
  <ReactRouter.Route path="root" component={AppBody}>
    <ReactRouter.Route path="/" component={Home} />
    <ReactRouter.Route path="/other" component={Other} />
    <ReactRouter.Route path="/settings" component={Settings} />
    <ReactRouter.Route path="*" component={AppNotFound} />
  </ReactRouter.Route>
);
Meteor.startup(function () {
  var browserHistory = ReactRouter.history.createHistory();
  ReactDOM.render(<ReactRouter.Router history={browserHistory}>{routes}</ReactRouter.Router>, document.getElementById("app"));
});
