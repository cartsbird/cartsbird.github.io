@echo off
setlocal EnableDelayedExpansion
set i=1
for %%a in (lan\*) do (
    ren "%%a" "!i!%%~xa"
    set /a i+=1
)