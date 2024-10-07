local urls = {      -- Discord webhook links
    player     = '',
    bug        = '',
    suggestion = '',
    other      = ''
}

function webhook(_m, _p)
    local user, url

    if tonumber(_p) == 1 then
        user = 'Denuncia de Jogador'
        url = urls.player
    elseif tonumber(_p) == 2 then
        user = 'Bug Reportado'
        url = urls.bug
    elseif tonumber(_p) == 3 then
        user = 'Sugestão'
        url = urls.suggestion
    elseif tonumber(_p) == 4 then
        user = 'Report - Outro'
        url = urls.other
    end

    PerformHttpRequest(url, function(err, text, headers) end, 'POST', json.encode({
        content = _m,
        username = user,
        avatar_url = 'https://i.imgur.com/qxgdhUg.png'
    }), { ['Content-Type'] = 'application/json' })
end

RegisterNetEvent('CRe:Feedback:01')
AddEventHandler('CRe:Feedback:01', function(_m, _p)
    webhook(_m, _p)
end)