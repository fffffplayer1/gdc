var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkSpan = function (_React$Component) {
    _inherits(LinkSpan, _React$Component);

    function LinkSpan() {
        _classCallCheck(this, LinkSpan);

        return _possibleConstructorReturn(this, (LinkSpan.__proto__ || Object.getPrototypeOf(LinkSpan)).apply(this, arguments));
    }

    _createClass(LinkSpan, [{
        key: "render",
        value: function render() {
            var content = [];
            content.push(React.createElement(
                "div",
                null,
                "); if (this.props.page == this.props.num) ",
                content.push(React.createElement(
                    "span",
                    { className: "lia-js-data-pageNum-" + this.props.num + " lia-link-navigation lia-link-disabled",
                        key: "link_" + (8 + this.props.num), href: "legouniverse/" + this.props.num },
                    "); if (this.props.content == \"p\") ",
                    content.push(React.createElement(
                        "span",
                        null,
                        React.createElement(
                            "span",
                            { className: "lia-paging-page-arrow" },
                            "\xAB"
                        ),
                        React.createElement(
                            "span",
                            { className: "lia-paging-page-link" },
                            "Previous"
                        )
                    )),
                    "else if (this.props.content == \"n\") ",
                    content.push(React.createElement(
                        "span",
                        null,
                        React.createElement(
                            "span",
                            { className: "lia-paging-page-link" },
                            "Next"
                        ),
                        React.createElement(
                            "span",
                            { className: "lia-paging-page-arrow" },
                            "\xBB"
                        )
                    )),
                    "else content.push(",
                    this.props.num,
                    "); content.push("
                )),
                "else ",
                content.push(React.createElement(
                    "a",
                    { className: "lia-js-data-pageNum-" + this.props.num + " lia-link-navigation",
                        key: "link_" + (8 + this.props.num), href: "legouniverse/" + this.props.num },
                    "); if (this.props.content == \"p\") ",
                    content.push(React.createElement(
                        "span",
                        null,
                        React.createElement(
                            "span",
                            { className: "lia-paging-page-arrow" },
                            "\xAB"
                        ),
                        React.createElement(
                            "span",
                            { className: "lia-paging-page-link" },
                            "Previous"
                        )
                    )),
                    "else if (this.props.content == \"n\") ",
                    content.push(React.createElement(
                        "span",
                        null,
                        React.createElement(
                            "span",
                            { className: "lia-paging-page-link" },
                            "Next"
                        ),
                        React.createElement(
                            "span",
                            { className: "lia-paging-page-arrow" },
                            "\xBB"
                        )
                    )),
                    "else content.push(",
                    this.props.num,
                    "); else content.push("
                )),
                "content.push("
            ));
            return content;
        }
    }]);

    return LinkSpan;
}(React.Component);

var PageNav = function (_React$Component2) {
    _inherits(PageNav, _React$Component2);

    function PageNav(props) {
        _classCallCheck(this, PageNav);

        var _this2 = _possibleConstructorReturn(this, (PageNav.__proto__ || Object.getPrototypeOf(PageNav)).call(this, props));

        _this2.page = _this2.location = location.href.split('/').slice(-1)[0].split('.')[0];
        if (_this2.page[0] <= '9' && _this2.page[0] > '0') _this2.page = Number(_this2.page);else _this2.page = 1;
        return _this2;
    }

    _createClass(PageNav, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "lia-menu-bar lia-menu-bar-top lia-component-menu-bar" },
                React.createElement(
                    "div",
                    { className: "lia-decoration-border-menu-bar" },
                    React.createElement(
                        "div",
                        { className: "lia-decoration-border-menu-bar-top" },
                        React.createElement(
                            "div",
                            null,
                            " "
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "lia-decoration-border-menu-bar-content" },
                        React.createElement(
                            "div",
                            null,
                            React.createElement(
                                "div",
                                { className: "lia-paging-full-wrapper lia-paging-pager", key: "pager" },
                                React.createElement(
                                    "div",
                                    { className: "lia-inline-ajax-feedback" },
                                    React.createElement("div", { className: "AjaxFeedback", key: "ajaxFeedback" })
                                ),
                                React.createElement(
                                    "div",
                                    { className: "lia-inline-ajax-feedback" },
                                    React.createElement("div", { className: "AjaxFeedback", key: "ajaxFeedback" })
                                ),
                                React.createElement(
                                    "ul",
                                    { className: "lia-paging-full" },
                                    React.createElement(
                                        "li",
                                        { className: "lia-paging-page-previous lia-component-previous" },
                                        React.createElement(LinkSpan, { page: 0, num: this.page - 1, content: "p" })
                                    ),
                                    React.createElement(
                                        "li",
                                        { className: "lia-component-pagesnumbered" },
                                        React.createElement(
                                            "ul",
                                            { className: "lia-paging-full-pages" },
                                            React.createElement(
                                                "li",
                                                { className: "lia-paging-page-first lia-js-data-pageNum-1" },
                                                React.createElement(LinkSpan, { page: this.page, num: 1, content: "" })
                                            ),
                                            React.createElement(
                                                "li",
                                                { className: "lia-paging-page-link lia-js-data-pageNum-2" },
                                                React.createElement(LinkSpan, { page: this.page, num: 2, content: "" })
                                            ),
                                            React.createElement(
                                                "li",
                                                { className: "lia-paging-page-link lia-js-data-pageNum-3" },
                                                React.createElement(LinkSpan, { page: this.page, num: 3, content: "" })
                                            ),
                                            React.createElement(
                                                "li",
                                                { className: "lia-paging-page-link lia-js-data-pageNum-4" },
                                                React.createElement(LinkSpan, { page: this.page, num: 4, content: "" })
                                            ),
                                            React.createElement(
                                                "li",
                                                { className: "lia-paging-page-link lia-js-data-pageNum-5" },
                                                React.createElement(LinkSpan, { page: this.page, num: 5, content: "" })
                                            ),
                                            React.createElement(
                                                "li",
                                                { className: "lia-paging-page-link lia-js-data-pageNum-6" },
                                                React.createElement(LinkSpan, { page: this.page, num: 6, content: "" })
                                            ),
                                            React.createElement(
                                                "li",
                                                { className: "lia-paging-page-link lia-js-data-pageNum-7" },
                                                React.createElement(LinkSpan, { page: this.page, num: 7, content: "" })
                                            ),
                                            React.createElement(
                                                "li",
                                                { className: "lia-paging-page-link lia-js-data-pageNum-8" },
                                                React.createElement(LinkSpan, { page: this.page, num: 8, content: "" })
                                            ),
                                            React.createElement(
                                                "li",
                                                { className: "lia-paging-page-last lia-js-data-pageNum-9" },
                                                React.createElement(LinkSpan, { page: this.page, num: 9, content: "" })
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        { className: "lia-paging-page-next lia-component-next" },
                                        React.createElement(LinkSpan, { page: 10, num: this.page + 1, content: "n" })
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "lia-decoration-border-menu-bar-bottom" },
                        React.createElement(
                            "div",
                            null,
                            " "
                        )
                    )
                )
            );
        }
    }]);

    return PageNav;
}(React.Component);

var domContainer = document.querySelector('#pageNavWrapperTop');
ReactDOM.render(React.createElement(PageNav, null), domContainer);