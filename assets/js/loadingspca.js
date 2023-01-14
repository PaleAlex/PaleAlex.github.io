(function(vegaEmbed) {
      var spec = {"usermeta": {"embedOptions": {"theme": "dark"}}, "config": {"view": {"continuousWidth": 400, "continuousHeight": 300}}, "hconcat": [{"layer": [{"data": {"name": "data-f2a58141db2e31efda7ec2479cf17271"}, "mark": "point", "encoding": {"x": {"field": "PC1", "type": "quantitative"}, "y": {"field": "PC2", "type": "quantitative"}}, "height": 250, "width": 250}, {"data": {"name": "data-2e6a02896b596988d675790196810b72"}, "mark": {"type": "text", "align": "left", "baseline": "middle", "color": "white", "dx": 7}, "encoding": {"opacity": {"condition": {"value": 1, "selection": "selector010"}, "value": 0}, "text": {"field": "features", "type": "nominal"}, "x": {"field": "PC1", "type": "quantitative"}, "y": {"field": "PC2", "type": "quantitative"}}, "height": 250, "selection": {"selector010": {"type": "single", "on": "mouseover", "nearest": true}}, "width": 250}]}, {"layer": [{"data": {"name": "data-f2a58141db2e31efda7ec2479cf17271"}, "mark": "point", "encoding": {"x": {"field": "PC1", "type": "quantitative"}, "y": {"field": "PC3", "type": "quantitative"}}, "height": 250, "width": 250}, {"data": {"name": "data-2e6a02896b596988d675790196810b72"}, "mark": {"type": "text", "align": "left", "baseline": "middle", "color": "white", "dx": 7}, "encoding": {"opacity": {"condition": {"value": 1, "selection": "selector010"}, "value": 0}, "text": {"field": "features", "type": "nominal"}, "x": {"field": "PC1", "type": "quantitative"}, "y": {"field": "PC3", "type": "quantitative"}}, "height": 250, "selection": {"selector010": {"type": "single", "on": "mouseover", "nearest": true}}, "width": 250}]}, {"layer": [{"data": {"name": "data-f2a58141db2e31efda7ec2479cf17271"}, "mark": "point", "encoding": {"x": {"field": "PC2", "type": "quantitative"}, "y": {"field": "PC3", "type": "quantitative"}}, "height": 250, "width": 250}, {"data": {"name": "data-2e6a02896b596988d675790196810b72"}, "mark": {"type": "text", "align": "left", "baseline": "middle", "color": "white", "dx": 7}, "encoding": {"opacity": {"condition": {"value": 1, "selection": "selector010"}, "value": 0}, "text": {"field": "features", "type": "nominal"}, "x": {"field": "PC2", "type": "quantitative"}, "y": {"field": "PC3", "type": "quantitative"}}, "height": 250, "selection": {"selector010": {"type": "single", "on": "mouseover", "nearest": true}}, "width": 250}]}], "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json", "datasets": {"data-f2a58141db2e31efda7ec2479cf17271": [{"PC1": 0.13739701664995055, "PC2": -0.04908938092342039, "PC3": 0.27300414229454856, "features": "nodes", "visible": 1}, {"PC1": 0.12573998095323666, "PC2": -0.05884872596216423, "PC3": 0.25839648437946383, "features": "edges", "visible": 1}, {"PC1": 0.083705655321786, "PC2": -0.10745026848951751, "PC3": 0.24761467522488834, "features": "max_degree", "visible": 0}, {"PC1": -0.0011335399223250445, "PC2": 0.0010791885346873179, "PC3": 0.0032817587330170182, "features": "avg_degree", "visible": 0}, {"PC1": 0.08455534265878277, "PC2": -0.3168123337243364, "PC3": -0.04725637722794931, "features": "assortativity", "visible": 0}, {"PC1": 0.17811641032764208, "PC2": -0.4157816360787104, "PC3": 0.250521025736181, "features": "n_bestnodes", "visible": 1}, {"PC1": 0.04346106669808802, "PC2": 0.08594046791361609, "PC3": 0.015963508261719942, "features": "WSB_mentions_mean", "visible": 0}, {"PC1": 0.039949109341787505, "PC2": 0.06621493346604532, "PC3": 0.006249155970621853, "features": "WSB_mentions_median", "visible": 0}, {"PC1": 0.08221837401730679, "PC2": 0.22610537516929896, "PC3": 0.05344940830834722, "features": "WSB_mentions_max-min", "visible": 0}, {"PC1": 0.03277544025352039, "PC2": 0.06977596390701164, "PC3": 0.02159081701089575, "features": "WSB_mentions_iqr", "visible": 0}, {"PC1": 0.027143627155523185, "PC2": 0.07445266483596896, "PC3": 0.019780422464560982, "features": "WSB_mentions_std", "visible": 0}, {"PC1": 0.5055556204886826, "PC2": -0.15996646971597767, "PC3": -0.292026439738628, "features": "Presence_on_subReddits_mean", "visible": 1}, {"PC1": 0.5353126945633313, "PC2": -0.1635481654135785, "PC3": -0.31222049819724434, "features": "Presence_on_subReddits_median", "visible": 1}, {"PC1": 0.23344241113263367, "PC2": -0.003101992996872927, "PC3": -0.21115263951218918, "features": "Presence_on_subReddits_max-min", "visible": 0}, {"PC1": 0.0986671410569219, "PC2": -0.00913200902820537, "PC3": -0.0992672625701114, "features": "Presence_on_subReddits_iqr", "visible": 0}, {"PC1": 0.09412497788238201, "PC2": -0.00020548945082042298, "PC3": -0.08275671132637187, "features": "Presence_on_subReddits_std", "visible": 0}, {"PC1": 0.0891518526288736, "PC2": 0.14452753929347711, "PC3": -0.01398914551070114, "features": "Volume_mean", "visible": 0}, {"PC1": 0.10060971899594436, "PC2": 0.1525073156071982, "PC3": -0.03435709497564055, "features": "Volume_median", "visible": 0}, {"PC1": 0.18327491298315687, "PC2": 0.3494533342429665, "PC3": 0.028720045912152596, "features": "Volume_max-min", "visible": 1}, {"PC1": 0.09491821765415887, "PC2": 0.1497037534371547, "PC3": -0.01550574761381044, "features": "Volume_iqr", "visible": 0}, {"PC1": 0.06766590209784158, "PC2": 0.12183214927568645, "PC3": 0.003799824875195003, "features": "Volume_std", "visible": 0}, {"PC1": 0.09483212800630698, "PC2": 0.13044930638213495, "PC3": -0.005216120742101633, "features": "%Shorts_mean", "visible": 0}, {"PC1": 0.10635808910473628, "PC2": 0.13630656559868962, "PC3": -0.024307209044000806, "features": "%Shorts_median", "visible": 0}, {"PC1": 0.19897331953230646, "PC2": 0.3220164828059928, "PC3": 0.04806188235424799, "features": "%Shorts_max-min", "visible": 1}, {"PC1": 0.10228970186849719, "PC2": 0.13707954960695118, "PC3": -0.006780927825824503, "features": "%Shorts_iqr", "visible": 0}, {"PC1": 0.07302704591934782, "PC2": 0.11175746983048267, "PC3": 0.010824206917002544, "features": "%Shorts_std", "visible": 0}, {"PC1": 0.03928574091038314, "PC2": 0.10054147553092145, "PC3": 0.02653446925750499, "features": "News_mentions_mean", "visible": 0}, {"PC1": 0.04192580292498317, "PC2": 0.08648668175740254, "PC3": 0.017325831952680632, "features": "News_mentions_median", "visible": 0}, {"PC1": 0.0394130837911134, "PC2": 0.2172548318078902, "PC3": 0.07802753906531225, "features": "News_mentions_max-min", "visible": 0}, {"PC1": 0.014275484567720964, "PC2": 0.07763190098946172, "PC3": 0.019291459369699455, "features": "News_mentions_iqr", "visible": 0}, {"PC1": 0.011163595434538962, "PC2": 0.07107349915417077, "PC3": 0.025386312367888398, "features": "News_mentions_std", "visible": 0}, {"PC1": 0.0649223934659053, "PC2": -0.019155917475755232, "PC3": 0.02898417820317016, "features": "avg_daily_polarity_mean", "visible": 0}, {"PC1": 0.0821080064500299, "PC2": -0.013378199646712998, "PC3": 0.0361521187270868, "features": "avg_daily_polarity_median", "visible": 0}, {"PC1": -0.06961436507844669, "PC2": -0.010342232271318271, "PC3": 0.021399977342850617, "features": "avg_daily_polarity_max-min", "visible": 0}, {"PC1": -0.029043015762469176, "PC2": 0.027964652235862454, "PC3": 0.021482103325541096, "features": "avg_daily_polarity_iqr", "visible": 0}, {"PC1": -0.03284706100622231, "PC2": -0.0015464945535438774, "PC3": 0.009535807920451321, "features": "avg_daily_polarity_std", "visible": 0}, {"PC1": 0.04743123551614171, "PC2": 0.09487870620099925, "PC3": 0.011059933700150234, "features": "%Neg_Articles_mean", "visible": 0}, {"PC1": 0.046450271575943156, "PC2": 0.07322893043810233, "PC3": 0.001360489022637042, "features": "%Neg_Articles_median", "visible": 0}, {"PC1": 0.06161064003045326, "PC2": 0.23265605451662247, "PC3": 0.05790573571252809, "features": "%Neg_Articles_max-min", "visible": 0}, {"PC1": 0.023975323924092466, "PC2": 0.074356343323023, "PC3": 0.013745869405027627, "features": "%Neg_Articles_iqr", "visible": 0}, {"PC1": 0.018207519604343827, "PC2": 0.07639468007979991, "PC3": 0.021037529119724372, "features": "%Neg_Articles_std", "visible": 0}, {"PC1": 0.043116702065184434, "PC2": 0.05520944163624603, "PC3": 0.010751922737181919, "features": "%Pos_Articles_mean", "visible": 0}, {"PC1": 0.0482208608399676, "PC2": 0.042720320460199857, "PC3": 0.005414287632888211, "features": "%Pos_Articles_median", "visible": 0}, {"PC1": 0.03468933180830646, "PC2": 0.13927465101696518, "PC3": 0.040949621257910386, "features": "%Pos_Articles_max-min", "visible": 0}, {"PC1": 0.021107405040991012, "PC2": 0.044816645984137385, "PC3": 0.004859411169240591, "features": "%Pos_Articles_iqr", "visible": 0}, {"PC1": 0.009485184777184465, "PC2": 0.045599230536716724, "PC3": 0.012501678262035113, "features": "%Pos_Articles_std", "visible": 0}, {"PC1": 0.06374258623602283, "PC2": -0.019618286508571316, "PC3": 0.11474878513417533, "features": "Tweets_mentions_mean", "visible": 0}, {"PC1": 0.05841564899747672, "PC2": -0.028348483511214374, "PC3": 0.0884983415110471, "features": "Tweets_mentions_median", "visible": 0}, {"PC1": 0.1115839830619053, "PC2": 0.01887708582141485, "PC3": 0.26832890803372156, "features": "Tweets_mentions_max-min", "visible": 1}, {"PC1": 0.04024732574292998, "PC2": -0.0026055749837316958, "PC3": 0.07182013410084735, "features": "Tweets_mentions_iqr", "visible": 0}, {"PC1": 0.037146563712188656, "PC2": 0.006296745732800975, "PC3": 0.09005939017949603, "features": "Tweets_mentions_std", "visible": 0}, {"PC1": 0.05021126975954527, "PC2": 0.010343871437732313, "PC3": 0.056955366807235876, "features": "%Original_Tweets_mean", "visible": 0}, {"PC1": 0.04520041244122446, "PC2": 0.000406927724656446, "PC3": 0.03662225707779396, "features": "%Original_Tweets_median", "visible": 0}, {"PC1": 0.08864919177347913, "PC2": 0.05797206939675997, "PC3": 0.16520295759684392, "features": "%Original_Tweets_max-min", "visible": 0}, {"PC1": 0.030372142806975786, "PC2": 0.015260226171385905, "PC3": 0.04014127315155885, "features": "%Original_Tweets_iqr", "visible": 0}, {"PC1": 0.029649848482079674, "PC2": 0.01965380117899659, "PC3": 0.0554357018639334, "features": "%Original_Tweets_std", "visible": 0}, {"PC1": 0.0619676611680893, "PC2": -0.02743247864448373, "PC3": 0.08822280437716794, "features": "%Pos_Tweets_mean", "visible": 0}, {"PC1": 0.05411774193213352, "PC2": -0.03653333439930162, "PC3": 0.06397361954861729, "features": "%Pos_Tweets_median", "visible": 0}, {"PC1": 0.12264722254518852, "PC2": 0.010291664249861027, "PC3": 0.2295030881933578, "features": "%Pos_Tweets_max-min", "visible": 0}, {"PC1": 0.03971889934062084, "PC2": -0.009006950457800372, "PC3": 0.05838880841687822, "features": "%Pos_Tweets_iqr", "visible": 0}, {"PC1": 0.039536916476688035, "PC2": 0.003882657719259297, "PC3": 0.07703739213395207, "features": "%Pos_Tweets_std", "visible": 0}, {"PC1": 0.027790248470087067, "PC2": -0.014790620798414885, "PC3": 0.053120479756461045, "features": "%Neg_Tweets_mean", "visible": 0}, {"PC1": 0.021504529825131232, "PC2": -0.019877955463538842, "PC3": 0.02923798477139429, "features": "%Neg_Tweets_median", "visible": 0}, {"PC1": 0.07144704909195776, "PC2": 0.006815042781413727, "PC3": 0.1938476111282995, "features": "%Neg_Tweets_max-min", "visible": 0}, {"PC1": 0.02504563065465902, "PC2": -0.005889596407176397, "PC3": 0.04355163649012302, "features": "%Neg_Tweets_iqr", "visible": 0}, {"PC1": 0.023712310042337398, "PC2": 0.0035915528573183166, "PC3": 0.06598251259278848, "features": "%Neg_Tweets_std", "visible": 0}, {"PC1": 0.04952576207994342, "PC2": -0.05881417998127585, "PC3": 0.10295696089023272, "features": "max_tweet_likes_mean", "visible": 0}, {"PC1": 0.03391769849204258, "PC2": -0.06247001624869513, "PC3": 0.07957257946502792, "features": "max_tweet_likes_median", "visible": 0}, {"PC1": 0.1357860017649502, "PC2": -0.032399704827132544, "PC3": 0.2627772123750665, "features": "max_tweet_likes_max-min", "visible": 1}, {"PC1": 0.03367191179963625, "PC2": -0.01800745932523583, "PC3": 0.06092320426632176, "features": "max_tweet_likes_iqr", "visible": 0}, {"PC1": 0.043603385200204924, "PC2": -0.009052065872876571, "PC3": 0.0847821827341535, "features": "max_tweet_likes_std", "visible": 0}, {"PC1": 0.036827384460888735, "PC2": -0.051387567961780456, "PC3": 0.127298711441718, "features": "max_sum_tweet_metrics_mean", "visible": 0}, {"PC1": 0.02241861722516684, "PC2": -0.0520222184913355, "PC3": 0.10930759367039176, "features": "max_sum_tweet_metrics_median", "visible": 0}, {"PC1": 0.12113865776669765, "PC2": -0.03092097158981337, "PC3": 0.2466947814363504, "features": "max_sum_tweet_metrics_max-min", "visible": 0}, {"PC1": 0.025479358782258148, "PC2": -0.011607328574822145, "PC3": 0.06896383657646821, "features": "max_sum_tweet_metrics_iqr", "visible": 0}, {"PC1": 0.03695435052528155, "PC2": -0.007634038844893609, "PC3": 0.08077386466349616, "features": "max_sum_tweet_metrics_std", "visible": 0}], "data-2e6a02896b596988d675790196810b72": [{"PC1": 0.13739701664995055, "PC2": -0.04908938092342039, "PC3": 0.27300414229454856, "features": "nodes", "visible": 1}, {"PC1": 0.12573998095323666, "PC2": -0.05884872596216423, "PC3": 0.25839648437946383, "features": "edges", "visible": 1}, {"PC1": 0.17811641032764208, "PC2": -0.4157816360787104, "PC3": 0.250521025736181, "features": "n_bestnodes", "visible": 1}, {"PC1": 0.5055556204886826, "PC2": -0.15996646971597767, "PC3": -0.292026439738628, "features": "Presence_on_subReddits_mean", "visible": 1}, {"PC1": 0.5353126945633313, "PC2": -0.1635481654135785, "PC3": -0.31222049819724434, "features": "Presence_on_subReddits_median", "visible": 1}, {"PC1": 0.18327491298315687, "PC2": 0.3494533342429665, "PC3": 0.028720045912152596, "features": "Volume_max-min", "visible": 1}, {"PC1": 0.19897331953230646, "PC2": 0.3220164828059928, "PC3": 0.04806188235424799, "features": "%Shorts_max-min", "visible": 1}, {"PC1": 0.1115839830619053, "PC2": 0.01887708582141485, "PC3": 0.26832890803372156, "features": "Tweets_mentions_max-min", "visible": 1}, {"PC1": 0.1357860017649502, "PC2": -0.032399704827132544, "PC3": 0.2627772123750665, "features": "max_tweet_likes_max-min", "visible": 1}]}};
      var embedOpt = {"actions": false, "mode": "vega-lite"};

      function showError(el, error){
          el.innerHTML = ('<div class="error" style="color:red;">'
                          + '<p>JavaScript Error: ' + error.message + '</p>'
                          + "<p>This usually means there's a typo in your chart specification. "
                          + "See the javascript console for the full traceback.</p>"
                          + '</div>');
          throw error;
      }
      const el = document.getElementById('loadingspca');
      vegaEmbed("#loadingspca", spec, embedOpt)
        .catch(error => showError(el, error));
    })(vegaEmbed);
