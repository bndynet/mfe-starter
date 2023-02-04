tmux new-session -d -s mfe; \
tmux send-keys "cd host && npm start" Enter; \
tmux split-window -v; \
tmux send-keys "cd app-react && npm start" Enter; \
tmux split-window -v; \
tmux send-keys "cd app-angular && npm start" Enter; \
tmux split-window -v; \
tmux send-keys "cd app-vue && npm start" Enter; \
tmux select-layout even-horizontal; \
tmux a;