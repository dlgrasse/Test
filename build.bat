@echo off
setlocal

set JAVA_HOME=%JAVA_HOME_8%
set ANT_OPTS=-Xmx512m
ant -f build.xml %*

endlocal
