RegisterCommand('feedback', function()
    SendNuiMessage(json.encode({ action = 'open' }))
    SetNuiFocus(true, true)
end)

RegisterNUICallback('close', function()
    SetNuiFocus(false, false)
end)

RegisterNUICallback('hook', function(data)
    SetNuiFocus(false, false)
    TriggerServerEvent('CRe:Feedback:01', data.msg, data.opt)
end)