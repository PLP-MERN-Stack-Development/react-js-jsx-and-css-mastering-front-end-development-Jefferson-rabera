import React, { useState } from 'react';
import { Plus, Trash2, Check } from 'lucide-react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Button } from './Button';
import { Card, CardContent, CardHeader, CardTitle } from './Card';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdAt: number;
}

type FilterType = 'all' | 'active' | 'completed';

export const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [filter, setFilter] = useState<FilterType>('all');

  const quotes = [
    { text: "Productivity is never an accident. It is always the result of a commitment to excellence, intelligent planning, and focused effort.", author: "Paul J. Meyer" },
    { text: "The key is not to prioritize what’s on your schedule, but to schedule your priorities.", author: "Stephen Covey" },
    { text: "Goals are good for setting a direction, but systems are best for making progress.", author: "James Clear" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "You can do anything, but not everything.", author: "David Allen" },
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const newTask: Task = {
      id: Date.now().toString(),
      title: newTaskTitle.trim(),
      completed: false,
      createdAt: Date.now(),
    };

    setTasks([newTask, ...tasks]);
    setNewTaskTitle('');
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const stats = {
    total: tasks.length,
    active: tasks.filter(t => !t.completed).length,
    completed: tasks.filter(t => t.completed).length,
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Task Manager
        </h1>
        <p className="text-muted-foreground">
          Organize your tasks efficiently
        </p>
      </div>

      {/* New Motivational Section */}
      <div className="text-center space-y-4 animate-fade-in">
        <h2 className="text-2xl font-semibold text-primary">Get Inspired to Conquer Your Day</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Turn your to-dos into triumphs. Stay focused, prioritize what matters, and build momentum with wisdom from thinkers who mastered productivity.
        </p>
        <div className="space-y-4">
          <blockquote className="border-l-4 border-primary pl-4 italic text-foreground">
            “{randomQuote.text}”
            <cite className="block text-right text-sm text-muted-foreground">— {randomQuote.author}</cite>
          </blockquote>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-card">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Total Tasks</p>
              <p className="text-3xl font-bold text-foreground">{stats.total}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Active</p>
              <p className="text-3xl font-bold text-primary">{stats.active}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Completed</p>
              <p className="text-3xl font-bold text-success">{stats.completed}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Add Task Form */}
      <Card>
        <CardHeader>
          <CardTitle>Add New Task</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={addTask} className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              placeholder="Enter task title..."
              className="flex-1 px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            />
            <Button type="submit" variant="primary" className="w-full sm:w-auto">
              <Plus className="h-5 w-5 mr-1" />
              Add
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-2 flex-wrap">
        <Button
          variant={filter === 'all' ? 'primary' : 'outline'}
          size="sm"
          onClick={() => setFilter('all')}
        >
          All ({stats.total})
        </Button>
        <Button
          variant={filter === 'active' ? 'primary' : 'outline'}
          size="sm"
          onClick={() => setFilter('active')}
        >
          Active ({stats.active})
        </Button>
        <Button
          variant={filter === 'completed' ? 'primary' : 'outline'}
          size="sm"
          onClick={() => setFilter('completed')}
        >
          Completed ({stats.completed})
        </Button>
      </div>

      {/* Tasks List */}
      <div className="space-y-3">
        {filteredTasks.length === 0 ? (
          <Card>
            <CardContent className="pt-6 text-center text-muted-foreground">
              {filter === 'all' && 'No tasks yet. Add one to get started!'}
              {filter === 'active' && 'No active tasks. Great job!'}
              {filter === 'completed' && 'No completed tasks yet.'}
            </CardContent>
          </Card>
        ) : (
          filteredTasks.map((task, index) => (
            <Card
              key={task.id}
              hover
              className="animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => toggleTask(task.id)}
                    className={`flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${
                      task.completed
                        ? 'bg-success border-success'
                        : 'border-border hover:border-primary'
                    }`}
                    aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
                  >
                    {task.completed && <Check className="h-4 w-4 text-success-foreground" />}
                  </button>
                  <span
                    className={`flex-1 ${
                      task.completed
                        ? 'line-through text-muted-foreground'
                        : 'text-foreground'
                    }`}
                  >
                    {task.title}
                  </span>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deleteTask(task.id)}
                    className="flex-shrink-0"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};