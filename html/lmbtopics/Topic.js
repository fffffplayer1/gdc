import React from 'react';
import ReactDOM from 'react-dom';
import {topics} from './TopicList';

class messageIcon extends React.Component {
    render() {
        if(this.props.hot) return (
            <img className="MessageStatusIcon lia-img-icon-forum-thread-new-hot lia-fa-icon lia-fa-forum lia-fa-thread lia-fa-new lia-fa-hot"
                title="Hot Topic with new content" alt="This is a popular topic with new unread messages" aria-label="Hot Topic with new content"
                id="display_{2*this.props.i}" src="CLASSICS%20-%20LEGO_files/icon_thread_new_hot_002.png"></img>
        );
        else return (
            <img className="MessageStatusIcon lia-img-icon-forum-thread-new lia-fa-icon lia-fa-forum lia-fa-thread lia-fa-new"
                title="Topic with new content" alt="This is a topic with new unread messages" aria-label="Topic with new content"
                id="display_{this.props.i}" src="CLASSICS%20-%20LEGO_files/icon_thread_new_002.png"></img>
        );


    }
}

class Topic extends React.Component {

    currentYear() {
        d = new Date();
        return d.getFullYear();
    }

    render() {
        return (
            <tr className="lia-list-row lia-row-odd lia-js-data-messageUid-14026136 lia-js-data-messageRevision-1 t-first">
            	<td className="messageStatusIconColumn lia-data-cell-tertiary lia-data-cell-icon">
            		<messageIcon hot=topics[this.props.location][this.props.page][this.props.i]["hot"] i=this.props.i />
                    <!-- !!! message icon !!! -->
            	</td>
            	<td className="threadSubjectColumn lia-data-cell-primary lia-data-cell-text">
            		<div className="MessageSubjectCell">
            			<div className="MessageSubject">
            				<div className="MessageSubjectIcons ">
            					<h2 className="message-subject">
                        					<span className="lia-message-read">
                                    				<a className="page-link lia-link-navigation lia-custom-event" id="link_{this.props.i + 15}"
            							    href={topics[this.props.location][this.props.page][this.props.i]["link"]}>
                                        					{topics[this.props.location][this.props.page][this.props.i]["name"]}
            								<!-- !!! link and name !!! -->
                                    				</a>
                        					</span>
                    				</h2>
            				</div>
            			</div>
            		</div>
            	</td>
            	<td className="repliesCountColumn lia-data-cell-secondary lia-data-cell-integer">
            		{topics[this.props.location][this.props.page][this.props.i]["replies"]}
            		<!-- !!! repliesCount !!! -->
            	</td>
            	<td className="newMessagesCountColumn lia-data-cell-secondary lia-data-cell-integer">
            		<a className="NewMessagesCount lia-link-navigation" title="Jump to the first unread message" id="{this.props.i + 16}"
            		    href={topics[this.props.location][this.props.page][this.props.i]["link"]}>0</a>
            		<!-- !!! probably leave it as 0 for all !!! -->
            	</td>
            	<td className="messageAuthorColumn lia-data-cell-secondary lia-data-cell-text">
            		<div className="UserProfileSummary lia-user-item lia-js-data-userId-762830 lia-user-info-group">
            			<div className="lia-user-attributes">
            				<div className="lia-user-name">
            					<span className="UserName lia-user-name lia-user-rank-Rank-29">
            						<a className="lia-link-navigation lia-page-link lia-user-name-link" style="" target="_self" id="{this.props.i + 17}"
            						    href="#"><span className="">{topics[this.props.location][this.props.page][this.props.i]["user"]}</span></a>
            						<!-- !!! user and user link, if available !!! -->
            					</span>
            				</div>
            			</div>
            		</div>
            	</td>
            	<td className="kudosCountColumn lia-data-cell-secondary lia-data-cell-integer">
            		<span id="messagekudoscount" className="MessageKudosCount">
            			0
            			<!-- !!! kudosCount, make 0 for all probably !!! -->
            		</span>
            	</td>
            	<td className="viewsCountColumn lia-data-cell-secondary lia-data-cell-integer">
            		0
            		<!-- !!! viewsCount (0?) !!! -->
            	</td>
            	<td className="latestPostDateColumn lia-data-cell-secondary lia-data-cell-date">
            		<div className="MessagePostDateAndAuthorCell">
            			<div className="lia-message-post-date">
            				<a className="lia-link-navigation" id="link_{this.props.i + 18}"
            				    href="#">
            				<!-- !!! link to latest !!! -->
            					<span className="DateTime">
                						<span title="‎01-03-2017 01:05 AM" className="local-friendly-date">
            							{this.currentYear() - topics[this.props.location][this.props.page][this.props.i]["year"]} Years
            							<!-- !!! date (JS?) !!! -->
            						</span>
            					</span>
            				</a>
            			</div>
            		<div className="lia-message-by">
            			<span className="local-time">by</span>
            				<span className="UserName lia-user-name lia-user-rank-Rank-29">
            					<a className="lia-link-navigation lia-page-link lia-user-name-link" style="" target="_self" id="link_{this.props.i + 19}"
            					    href="#"><span className="">{topics[this.props.location][this.props.page][this.props.i]["lastuser"]}</span></a>
            					<!-- !!! user and link, if available !!! -->
            				</span>
            			</div>
            		</div>
            	</td>
            </tr>
        );
    }
}
