# allotted mac-book would load the very initial hostname in each session
# remember to set NOPASSWD up in sudo command
sudo hostname -fs "CP-MBP-DRD"

alias ls="ls -G"		# colorize !!
alias la="ls -Al"
alias ll="ls -l"

alias tree="tree -C"	# colorize !!

git_branch() {
	git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1)/'
}

export CLICOLOR=1
export LSCOLORS=gxfxcxdxbxegedabagacad
export PS1='\[\e[1;35m\][\t]\[\e[1;32m\]\u\[\e[0;1m\]@\[\e[33m\]\h\[\e[0;1m\]:\[\e[0m\] \[\e[1;36m\]\w\[\e[34m\]$(git_branch)\[\e[0m\] \$ '
