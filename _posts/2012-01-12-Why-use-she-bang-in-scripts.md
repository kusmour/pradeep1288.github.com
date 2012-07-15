---
layout: post
title: Why use '#!' in scripts
comments: true
category: technology
tags: [linux, scripting]
---

Originally, we only had one shell on Unix. When you asked to run a command, the shell would attempt to invoke one of the exec() system calls on it. It the command was an executable, the exec would succeed and the command would run. If the exec() failed, the shell would not give up, instead it would try to interpret the command file as if it were a shell script.
Then unix got more shells and the situation became confused. Most folks would write scripts in one shell and type commands in another. And each shell had differing rules for feeding scripts to an interpreter.

This is when the “#! /” trick was invented. The idea was to let the kernel’s exec () system calls succeed with shell scripts. When the kernel tries to exec () a file, it looks at the first 4 bytes which represent an integer called a magic number. This tells the kernel if it should try to run the file or not. So “#! /” was added to magic numbers that the kernel knows and it was extended to actually be able to run shell scripts by itself. But some people could not type “#! /”, they kept leaving the space out. So the kernel was expended a bit again to allow “#!/” to work as a special 3 byte magic number.
<script type="text/javascript"><!--
google_ad_client = "ca-pub-5288940759807123";
/* Gooogle Test */
google_ad_slot = "3677851868";
google_ad_width = 250;
google_ad_height = 250;
//-->
</script>
<script type="text/javascript"
src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
</script>