var defaultPubName = 'taboola-training';
var useDefaultPub = true;
var url_string = window.location.href;
var url = new URL(url_string);
var newPubName = url.searchParams.get("pubName");
console.log(newPubName);
window._taboola = window._taboola || [];
_taboola.push({article: 'auto'});
!function (e, f, u, i) {
    if (!document.getElementById(i)) {
        e.async = 1;
        e.src = u;
        e.id = i;
        f.parentNode.insertBefore(e, f);
    }
}(document.createElement('script'),
    document.getElementsByTagName('script')[0],
    //useDefaultPub ? '//cdn.taboola.com/libtrc/' + defaultPubName + '/loader.js' : '//cdn.taboola.com/libtrc/' + newPubName + '/loader.js',
    (newPubName !== null) ? '//cdn.taboola.com/libtrc/' + newPubName + '/loader.js' : '//cdn.taboola.com/libtrc/' + defaultPubName + '/loader.js',
    'tb_loader_script');
if (window.performance && typeof window.performance.mark == 'function') {
    window.performance.mark('tbl_ic');
}

document.addEventListener('DOMContentLoaded', function () {
    var forceActionBucket = 'trc_fpp_action_buckets';
    (newPubName !== null) ? document.getElementById('pubId').value = newPubName : document.getElementById('pubId').value = defaultPubName;

    document.getElementById('setupForm').addEventListener('submit', function (e) {
        e.preventDefault();
        e.stopPropagation();
        useDefaultPub = false;
        window.location.href = "?" + forceActionBucket + "=" + document.getElementById('placementName').value + ':' + document.getElementById('actionBucketId').value + '&pubName=' + document.getElementById('pubId').value;
        return false;
    });
}, false);
