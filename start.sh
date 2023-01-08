tmux new-session -d -s mfe; \
tmux split-window -v; \
tmux send-keys "npm start --prefix host" Enter; \
tmux split-window -v; \
tmux send-keys "npm start --prefix app-angular" Enter; \
tmux split-window -v; \
tmux send-keys "npm start --prefix app-vue" Enter; \
tmux select-layout main-horizontal; \
tmux select-pane -t 1; \
tmux a;