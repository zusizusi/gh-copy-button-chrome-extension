console.log("git extension test")

// div class="gh-header-show"を取得
var ghHeaderShow = document.getElementsByClassName('gh-header-show')[0];
// div class="gh-header-show"の子要素のdiv class="gh-header-title"を取得
var ghHeaderTitle = ghHeaderShow.getElementsByClassName('gh-header-title')[0];
// div class="gh-header-title"の小要素のspanを取得
var ghHeaderPRNumSpan = ghHeaderTitle.getElementsByTagName('span')[0];
// spanのテキストを取得
var prNum = ghHeaderPRNumSpan.textContent;
// div class="gh-header-title"の小要素のclass="js-issue-title"を取得
var ghHeaderTitleIssueTitle = ghHeaderTitle.getElementsByClassName('js-issue-title')[0];
// ghHeaderTitleIssueTitleのテキストを取得
var issueTitles = ghHeaderTitleIssueTitle.textContent;
// issueTitlesから:の前に()がある場合、その文字列を抽出
var packageName = issueTitles.match(/\((.*?)\)\:/);
// issueTitlesの後ろからみて:までの文字列を抽出
var issueTitle = issueTitles.match(/\:(.*)/);
console.log("issueTitles:", issueTitles);


// div class="gh-header-show"の子要素のdiv class="gh-header-actions"を取得
var ghHeaderActions = ghHeaderShow.getElementsByClassName('gh-header-actions')[0];
// div class="gh-header-actions"にボタンを追加
var CopyTitlesButton = document.createElement('button');
CopyTitlesButton.className = 'Button--secondary Button--small Button';
CopyTitlesButton.innerHTML = 'Copy Titles';
CopyTitlesButton.onclick = function() {
    //クリップボードにURLと"タイトル"のハイパーリンクをコピー
    var url = location.href;
    var link = '[' + prNum + '](' + url + ')';
    var clipboardText = link ;
    //packageNameがある場合、(packageName)を太文字にして追加する
    if (packageName) {
        clipboardText = clipboardText + ' **(' + packageName[1] + ')**';
    }
    clipboardText = clipboardText +' ' + issueTitle[1];
    navigator.clipboard.writeText(clipboardText);
    console.log('クリップボードにコピーしました。');
};
ghHeaderActions.appendChild(CopyTitlesButton);

var CopyPRTagButton = document.createElement('button');
CopyPRTagButton.className = 'Button--secondary Button--small Button';
CopyPRTagButton.innerHTML = 'Copy PR Tag';
CopyPRTagButton.onclick = function() {
    //クリップボードにURLと"タイトル"のハイパーリンクをコピー
    var url = location.href;
    var link = '[' + prNum + '](' + url + ')';
    var clipboardText = link ;
    navigator.clipboard.writeText(clipboardText);
    console.log('クリップボードにコピーしました。');
};
ghHeaderActions.appendChild(CopyPRTagButton);

