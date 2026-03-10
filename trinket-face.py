import turtle

face_color = "beige"
eye_color = "lightblue"
pupil_color = "black"
mouth_color = "red"
nose_color = "pink"
ear_color = "beige"

face_size = 140
eye_size = 15
pupil_size = 4
mouth_size = 80
nose_size = 40
ear_size = 40

def draw_circle(t, color, size, x, y):
    t.penup()
    t.goto(x, y)
    t.color(color)
    t.fillcolor(color)
    t.begin_fill()
    t.circle(size)
    t.end_fill()
    t.pendown()

def draw_triangle(t, color, size, x, y):
    t.penup()
    t.goto(x, y)
    t.color(color)
    t.fillcolor(color)
    t.begin_fill()
    t.pendown()
    for i in range(3):
        t.forward(size)
        t.left(120)
    t.end_fill()
    t.penup()

tommy = turtle.Turtle()
tommy.speed(0)
tommy.hideturtle()

screen = turtle.Screen()
screen.bgcolor("lightblue")

# face
draw_circle(tommy, face_color, face_size, 0, -100)

# ears
draw_circle(tommy, ear_color, ear_size, -face_size - 20, 0)
draw_circle(tommy, ear_color, ear_size, face_size - 20, 0)

# eyes
draw_circle(tommy, eye_color, eye_size, -40, 40)
draw_circle(tommy, eye_color, eye_size, 40, 40)

# pupils
draw_circle(tommy, pupil_color, pupil_size, -40, 55)
draw_circle(tommy, pupil_color, pupil_size, 40, 55)

# nose
draw_triangle(tommy, nose_color, nose_size, -nose_size/2, 10)

# mouth
tommy.penup()
tommy.goto(-mouth_size, -20)
tommy.setheading(-60)
tommy.pendown()
tommy.color(mouth_color)
tommy.width(5)
tommy.circle(mouth_size, 120)

turtle.done()
