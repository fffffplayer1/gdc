var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var MessageIcon = function (_React$Component) {
    _inherits(MessageIcon, _React$Component);

    function MessageIcon() {
        _classCallCheck(this, MessageIcon);

        return _possibleConstructorReturn(this, (MessageIcon.__proto__ || Object.getPrototypeOf(MessageIcon)).apply(this, arguments));
    }

    _createClass(MessageIcon, [{
        key: "render",
        value: function render() {
            if (this.props.hot) return React.createElement("img", { className: "MessageStatusIcon lia-img-icon-forum-thread-new-hot lia-fa-icon lia-fa-forum lia-fa-thread lia-fa-new lia-fa-hot",
                title: "Hot Topic with new content", alt: "This is a popular topic with new unread messages", "aria-label": "Hot Topic with new content",
                key: "display_{2*this.props.i}", src: "CLASSICS%20-%20LEGO_files/icon_thread_new_hot_002.png" });else return React.createElement("img", { className: "MessageStatusIcon lia-img-icon-forum-thread-new lia-fa-icon lia-fa-forum lia-fa-thread lia-fa-new",
                title: "Topic with new content", alt: "This is a topic with new unread messages", "aria-label": "Topic with new content",
                key: "display_{this.props.i}", src: "CLASSICS%20-%20LEGO_files/icon_thread_new_002.png" });
        }
    }]);

    return MessageIcon;
}(React.Component);

var Topic = function (_React$Component2) {
    _inherits(Topic, _React$Component2);

    function Topic() {
        _classCallCheck(this, Topic);

        return _possibleConstructorReturn(this, (Topic.__proto__ || Object.getPrototypeOf(Topic)).apply(this, arguments));
    }

    _createClass(Topic, [{
        key: "currentYear",
        value: function currentYear() {
            d = new Date();
            return d.getFullYear();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "tr",
                { className: "lia-list-row lia-row-odd lia-js-data-messageUkey-14026136 lia-js-data-messageRevision-1 t-first" },
                React.createElement(
                    "td",
                    { className: "messageStatusIconColumn lia-data-cell-tertiary lia-data-cell-icon" },
                    React.createElement(MessageIcon, { hot: topics[this.props.location][this.props.page][this.props.i]["hot"], i: this.props.i })
                ),
                React.createElement(
                    "td",
                    { className: "threadSubjectColumn lia-data-cell-primary lia-data-cell-text" },
                    React.createElement(
                        "div",
                        { className: "MessageSubjectCell" },
                        React.createElement(
                            "div",
                            { className: "MessageSubject" },
                            React.createElement(
                                "div",
                                { className: "MessageSubjectIcons " },
                                React.createElement(
                                    "h2",
                                    { className: "message-subject" },
                                    React.createElement(
                                        "span",
                                        { className: "lia-message-read" },
                                        React.createElement(
                                            "a",
                                            { className: "page-link lia-link-navigation lia-custom-event", key: "link_{this.props.i + 15}",
                                                href: topics[this.props.location][this.props.page][this.props.i]["link"] },
                                            topics[this.props.location][this.props.page][this.props.i]["name"]
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    "td",
                    { className: "repliesCountColumn lia-data-cell-secondary lia-data-cell-integer" },
                    topics[this.props.location][this.props.page][this.props.i]["replies"]
                ),
                React.createElement(
                    "td",
                    { className: "newMessagesCountColumn lia-data-cell-secondary lia-data-cell-integer" },
                    React.createElement(
                        "a",
                        { className: "NewMessagesCount lia-link-navigation", title: "Jump to the first unread message", key: "{this.props.i + 16}",
                            href: topics[this.props.location][this.props.page][this.props.i]["link"] },
                        "0"
                    )
                ),
                React.createElement(
                    "td",
                    { className: "messageAuthorColumn lia-data-cell-secondary lia-data-cell-text" },
                    React.createElement(
                        "div",
                        { className: "UserProfileSummary lia-user-item lia-js-data-userkey-762830 lia-user-info-group" },
                        React.createElement(
                            "div",
                            { className: "lia-user-attributes" },
                            React.createElement(
                                "div",
                                { className: "lia-user-name" },
                                React.createElement(
                                    "span",
                                    { className: "UserName lia-user-name lia-user-rank-Rank-29" },
                                    React.createElement(
                                        "a",
                                        { className: "lia-link-navigation lia-page-link lia-user-name-link", target: "_self", key: "{this.props.i + 17}",
                                            href: "#" },
                                        React.createElement(
                                            "span",
                                            { className: "" },
                                            topics[this.props.location][this.props.page][this.props.i]["user"]
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    "td",
                    { className: "kudosCountColumn lia-data-cell-secondary lia-data-cell-integer" },
                    React.createElement(
                        "span",
                        { key: "messagekudoscount", className: "MessageKudosCount" },
                        "0"
                    )
                ),
                React.createElement(
                    "td",
                    { className: "viewsCountColumn lia-data-cell-secondary lia-data-cell-integer" },
                    "0"
                ),
                React.createElement(
                    "td",
                    { className: "latestPostDateColumn lia-data-cell-secondary lia-data-cell-date" },
                    React.createElement(
                        "div",
                        { className: "MessagePostDateAndAuthorCell" },
                        React.createElement(
                            "div",
                            { className: "lia-message-post-date" },
                            React.createElement(
                                "a",
                                { className: "lia-link-navigation", key: "link_{this.props.i + 18}",
                                    href: "#" },
                                React.createElement(
                                    "span",
                                    { className: "DateTime" },
                                    React.createElement(
                                        "span",
                                        { title: "\u200E01-03-2017 01:05 AM", className: "local-friendly-date" },
                                        this.currentYear() - topics[this.props.location][this.props.page][this.props.i]["year"],
                                        " Years"
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "lia-message-by" },
                            React.createElement(
                                "span",
                                { className: "local-time" },
                                "by"
                            ),
                            React.createElement(
                                "span",
                                { className: "UserName lia-user-name lia-user-rank-Rank-29" },
                                React.createElement(
                                    "a",
                                    { className: "lia-link-navigation lia-page-link lia-user-name-link", target: "_self", key: "link_{this.props.i + 19}",
                                        href: "#" },
                                    React.createElement(
                                        "span",
                                        { className: "" },
                                        " ",
                                        topics[this.props.location][this.props.page][this.props.i]["lastuser"]
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Topic;
}(React.Component);

var TopicList = function (_React$Component3) {
    _inherits(TopicList, _React$Component3);

    function TopicList(props) {
        _classCallCheck(this, TopicList);

        var _this3 = _possibleConstructorReturn(this, (TopicList.__proto__ || Object.getPrototypeOf(TopicList)).call(this, props));

        console.log(topics);
        _this3.location = location.href.split('/').slice(-1)[0].split('.')[0];
        console.log(_this3.location);
        _this3.page = 0;
        return _this3;
    }

    _createClass(TopicList, [{
        key: "render",
        value: function render() {
            var content = [];
            for (this.i = 0; this.i < 22 && topics[this.location][this.page][this.i] !== undefined; ++this.i) {
                content.push(React.createElement(Topic, { key: 'topic_' + this.i, location: this.location, page: this.page, i: this.i }));
            }return content;
        }
    }]);

    return TopicList;
}(React.Component);

var domContainer = document.querySelector('#topicListContainer');
ReactDOM.render(React.createElement(TopicList, null), domContainer);